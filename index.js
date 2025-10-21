// entrypoint for the package
import Icon from './src/Icon';
export default Icon;

// Also offer named exports for all generated icons (if src/icons/index.js exists)
import * as Icons from './src/icons';
export { Icons }.
