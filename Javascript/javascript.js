
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

const users = []


 // event
//let arryData = []
 document.getElementById('register').addEventListener('submit', (e) => {
  e.preventDefault()


  
  
//if ( ele)

  //for (let element of e.target){
    /* console.log(element.value)*/
    
   
    let firstName = e.target[0].value
    let lastName = e.target[1].value
    let phonenum = e.target[2].value
    let emailAddress = e.target[3].value
    let streetAddress = e.target[4].value
    let zipnum = e.target[5].value
    let districtAddress = e.target[6].value
   
  //}

 let person = new Person(firstName, lastName , phonenum , emailAddress , streetAddress ,zipnum , districtAddress )
 users.push(person)
  document.getElementById('flip').innerHTML += `<div><span style="margin-right: 0.3rem">${person.fname}</span><span>${person.lname}</span></div>`
  document.getElementById('panel').innerHTML += `<div><span style="margin-right: 0.3rem">${person.fname}</span><span>${person.lname}</span><span>${person.id}</span></div>`

})


 
function validateInput(e){
  
  const type = e.getAttribute('type')

    switch(type){


      case"text":
      validateLength(e)
      break;

      case"email":
      validateEmail(e)
      break;

      case"number":
    validateNumber(e)
      break;
    }

}

//functions
function validateLength(e){
  if (e.value.length > 2){
    e.classList.remove("invalid")
    return false
  }
  else{
    e.classList.add("invalid")
    return true
  }
}

function validateEmail(e){
  const regex= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (regex.test(e.value)){
    e.classList.remove("invalid")
   return false
  }
   else{
    e.classList.add("invalid")
    return true
   }
}

function validateNumber(e){
  const regexnum = /^-?\d+\.?\d*$/
  if ( regexnum.test(e.value)){
    e.classList.remove("invalid")
    return false
  }
  else{
    e.classList.add("invalid")
    return true
  }
}