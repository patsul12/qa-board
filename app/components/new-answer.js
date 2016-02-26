import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        content: this.get('content'),
        stars: 0
      }
      this.sendAction('saveAnswer', params);
    }
  }
});
