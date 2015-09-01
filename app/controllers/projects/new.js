import Ember from 'ember';
import ajax from 'trs-ember/utils/ajax';

export default Ember.Controller.extend({
  actions: {
    save() {
      const project = this.get('project');

      ajax('/projects', {
        type: 'POST',
        data: JSON.stringify(project)
      }).then(() => {
        this.transitionToRoute('projects');
      });
    }
  }
});

