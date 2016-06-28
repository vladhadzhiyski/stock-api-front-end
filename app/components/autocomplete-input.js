import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  foundItems: [],
  findItem(value) {
    const { store, model, key } = this.getProperties('store', 'model', 'key');
    const query = {};
    if (value !== "") {
      query[key] = value;
    }
    store.query(model, query).then((items) => {
        this.set('foundItems', items);
    });
  },
  actions: {
    findStockData(value) {
      this.findItem(value);
    }
  }
});
