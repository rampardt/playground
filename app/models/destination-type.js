import Model, { attr, hasMany } from '@ember-data/model';

export default class DestinationTypeModel extends Model {
  @attr name;
  @attr description;

  @hasMany("destination") destinations;
}
