import Ember from 'ember';

export default Ember.Controller.extend({
  deliveryTarget: Ember.computed('model.deliveryTarget', {
    set: function(_, value) {
      this.set('model.deliveryTarget', value);
      Ember.run.debounce(this, 'save', 500);

      return value;
    },

    get: function() {
      return this.get('model.deliveryTarget');
    }
  }),

  save: function() {
    var model = this.get('model');

    if (model.get('isDirty')) {
      this.get('model').save();
    }
  }
});
