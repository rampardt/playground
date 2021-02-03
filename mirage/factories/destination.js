import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  name() {
    return faker.company.companyName();
  },

  description(){
    return faker.company.catchPhrase()
  },

  phone(){
    return faker.phone.phoneNumber()
  }
});
