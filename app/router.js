import EmberRouter from '@ember/routing/router';
import config from 'playground/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', function() {
    this.route('admin', function() {
      this.route('destinations');
    });
  });
  this.route('login');
  this.route('logout');
});
