import Ember from 'ember';

export default Ember.Route.extend({
    queryParams: {
        artist_id: {
            refreshModel: true
        }
    },
    model(params) {
      return this.store.query('album', params);
    }
});