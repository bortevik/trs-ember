import Ember from 'ember';
import ajax from 'trs-ember/utils/ajax';

export default Ember.Route.extend({
  model(params) {
    let url = `/languages/${params.language_id}`;

    return ajax(url).then(payload => {
      return payload.language;
    });
  },

  setupController(controller, model) {
    controller.set('language', model);
  }
});
