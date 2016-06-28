import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  symbol: attr('string'),
  name: attr('string'),
  low: attr('number'),
  high: attr('number'),
  open: attr('number'),
  close: attr('number'),
  average: attr('number')
});
