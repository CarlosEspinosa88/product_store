const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const MetroConfig = require('@ui-kitten/metro-config');
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

const defaultConfig = getDefaultConfig(__dirname);
const evaConfig = {
  evaPackage: '@eva-design/eva',
};

module.exports = mergeConfig(defaultConfig, MetroConfig.create(evaConfig));
