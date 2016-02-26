import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr(),
  userName: DS.attr(),
  firstName: DS.attr(),
  questions: DS.hasMany('question', {async: true}),
  answers: DS.hasMany('answer', {async: true})  
});
