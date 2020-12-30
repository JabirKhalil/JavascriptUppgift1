
/* import Person from "./Person.js";
import {uuidv4} from "./functions.js"; */
 


class Person{
    constructor(fname, lname, phone, email, street, zipcode, district){
        this.fname = fname
        this.lname = lname
        this.phone = phone
        this.email= email
        this.street = street
        this.zipcode = zipcode
        this.district = district
        this.id = uuidv4()
    }
    
}
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
const person = new Person('jon','mam', 00545,'go@f.com','down',214,'cob')

 console.log(person)