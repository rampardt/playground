import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomeAdminDestinationsRoute extends Route {
  @service store;

  model() {
    return this.store.findAll('destination');
  }

}
