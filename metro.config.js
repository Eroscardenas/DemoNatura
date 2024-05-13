const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = (async () => {
  const {
    resolver: { sourceExts },
  } = config;

  return {
    ...config,
    resolver: {
      ...config.resolver,
      assetExts: [...config.resolver.assetExts, "ttf", "otf"],
      sourceExts: [...sourceExts, "mjs"],
    },
  };
})();
