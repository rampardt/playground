import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";


/**
 * @argument {array} destinations
 */

class Record {
  @tracked isEdit = false;

  data;
}

export default class DestinationsComponent extends Component {

  get records() {
    return this.args.destinations?.map(item => {
      let record = new Record();
      record.data = item;
      return record;
    })
  }

  rollback(record) {
    record.data.rollbackAttributes();

  }
}
