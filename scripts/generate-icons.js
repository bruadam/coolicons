#!/usr/bin/env node
/**
 * Script: generate-icons.js
 * Purpose: Convert SVG files in icons-svg/ into react-native-svg React components in src/icons/
 *
 * Usage: npm run generate
 *
 * Requirements: @svgr/core, svgo, fs-extra, glob, prettier
 *
 * Notes:
 * - Input directory: icons-svg/
 * - Output directory: src/icons/
 * - Output index file: src/icons/index.js
 */

const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const { transform } = require('@svgr/core');
const prettier = require('prettier');

const INPUT_DIR = path.resolve(__dirname, '..', 'icons-svg');
const OUT_DIR = path.resolve(__dirname, '..', 'src', 'icons');
const INDEX_FILE = path.join(OUT_DIR, 'index.js');

const SVGR_OPTIONS = {
  native: true,
  icon: true,
  expandProps: 'end',
  prettier: false,
  svgo: true,
  svgoConfig: {
    plugins: [
      { name: 'removeViewBox', active: false },
      { name: 'removeXMLNS', active: true }
    ]
  },
  template: (variables, { tpl }) => {
    // variables: { componentName, props, jsx, exports }
    return tpl`import * as React from 'react';
import Svg, { G } from 'react-native-svg';
${variables.imports}
const ${variables.componentName} = (${variables.props}) => ${variables.jsx};
export default ${variables.componentName};
`;
  }
};

(async () => {
  try {
    await fs.ensureDir(OUT_DIR);
    const files = glob.sync('**/*.svg', { cwd: INPUT_DIR });

    if (!files.length) {
      console.error('No SVG files found in icons-svg/. Add your SVGs and re-run `npm run generate`.');
      process.exit(1);
    }

    const iconNames = [];

    for (const file of files) {
      const inPath = path.join(INPUT_DIR, file);
      const svgCode = await fs.readFile(inPath, 'utf8');

      // Derive component name: kebab-case file -> PascalCase
      const base = path.basename(file, '.svg');
      const pascal = base
        .replace(/[^a-zA-Z0-9]+/g, ' ')
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join('');
      const componentName = pascal.endsWith('Icon') ? pascal : `${pascal}Icon`;

      // Transform with SVGR for react-native
      const jsCode = await transform(svgCode, SVGR_OPTIONS, { componentName });

      // Tweak props: accept size and color, map to width/height/fill
      const wrapped = jsCode.replace(
        /const\s+([A-Za-z0-9_]+)\s*=\s*\(\s*props\s*\)\s*=>/, 
        (m, p1) =>
          `const ${p1} = ({ size = 24, color = 'currentColor', style, ...props }) =>`
      ).replace(/width={\d+} height={\d+}/g, 'width={size} height={size}')
        .replace(/fill="(.*?)"/g, 'fill={color}');

      // Prettify
      const pretty = prettier.format(wrapped, { parser: 'babel' });

      const outFile = path.join(OUT_DIR, `${pascal}.js`);
      await fs.writeFile(outFile, pretty, 'utf8');

      iconNames.push({ base, pascal });
      console.log(`Generated ${outFile}`);
    }

    // Create an index.js that exports everything and a map
    let indexContents = iconNames
      .map(
        ({ pascal }) =>
          `export { default as ${pascal} } from './${pascal}';`
      )
      .join('\n');

    // Also create a default map object for runtime Icon by name
    indexContents += '\n\nexport const iconMap = {\n' +
      iconNames
        .map(({ base, pascal }) => `  '${base}': ${pascal},`)
        .join('\n') +
      '\n};\n';

    indexContents = prettier.format(indexContents, { parser: 'babel' });
    await fs.writeFile(INDEX_FILE, indexContents, 'utf8');
    console.log(`Wrote ${INDEX_FILE}`);

    console.log('Icon generation complete.');
  } catch (err) {
    console.error('Error generating icons:', err);
    process.exit(1);
  }
})();
