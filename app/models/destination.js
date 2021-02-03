import Model, { attr, belongsTo } from '@ember-data/model';

export default class DestinationModel extends Model {
  @attr name;
  @attr description;
  @attr phone;

  @belongsTo('destination-type') type;
}
