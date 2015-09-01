import Ember from 'ember';
import ajax from 'trs-ember/utils/ajax';

export default Ember.Controller.extend({
  actions: {
    save() {
      const project = this.get('project');
      let projectId = Ember.get(project, 'id');
      let url = `/projects/${projectId}`;

      ajax(url, {
        type: 'PUT',
        data: JSON.stringify(project)
      }).then(() => {
        this.transitionToRoute('projects.project', projectId);
      });
    }
  }
});

