
const isEnv = (argv) => {

  const isEnvDevelopment = (argv.mode === 'development') || (typeof argv.mode === 'undefined');
  const isEnvProduction = argv.mode === 'production';

  return [isEnvProduction, isEnvDevelopment];
}

module.exports = isEnv;