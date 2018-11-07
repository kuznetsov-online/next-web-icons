module.exports = {
  webpack: (config, options) => {
    config.resolve.alias = {
      'react-native$': 'react-native-web',
    }
    return config
  },
}