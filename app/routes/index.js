import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  
  actions: {
    saveQuestion(params) {
      this.store.createRecord('question', params).save().then(this.transitionTo('index'));
    }
  }
});
