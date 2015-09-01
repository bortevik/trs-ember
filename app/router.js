import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('project', { path: 'project/:project_id'}, function() {
    this.route('language', { path: 'language/:language_id'});
  });
});

export default Router;
