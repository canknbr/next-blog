const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'canAdmin',
        mongodb_password: 'qrbAeVGc8HZ9ra4C',
        mongodb_cluster: 'cluster0',
        mongodb_database: 'deneme',
      },
    };
  }
  return {
    env: {
      mongodb_username: 'canAdmin',
      mongodb_password: 'qrbAeVGc8HZ9ra4C',
      mongodb_cluster: 'cluster0',
      mongodb_database: 'deneme',
    },
  };
};
