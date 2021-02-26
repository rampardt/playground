import { createServer, discoverEmberDataModels } from "ember-cli-mirage";

export function makeServer(config) {
  let finalConfig = {
    ...config,
    models: { ...discoverEmberDataModels(), ...config.models },
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  // this.namespace = '/api'

  // this.resource('user')
  this.get('/destinations');
}
