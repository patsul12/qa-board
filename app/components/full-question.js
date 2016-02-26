import Ember from 'ember';

export default Ember.Component.extend({
  showEditForm: false,

  actions: {

    updateQuestion(question) {
      var params = {
        question: question,
        content: this.get('content') || question.get('content'),
        notes: this.get('notes') || question.get('notes')
      }
      this.sendAction('updateQuestion', params);
    },

    incrementStars(model) {
      model.incrementProperty('stars');
      model.save();
    },

    showEditForm() {
      this.set('showEditForm', true);
    },

    hideEditForm() {
      this.set('showEditForm', false);
    }
  }
});
