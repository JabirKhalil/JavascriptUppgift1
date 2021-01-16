
 class User{
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

const form = document.getElementById('register');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const street = document.getElementById('street');
const zipcode = document.getElementById('zipcode');
const district = document.getElementById('district');

form.addEventListener('submit',(e) => {
    e.preventDefault();

    checkInput();
   
    
      /*  document.getElementById('text-output').innerText = "Användare skapades!"
        createElement();
        fillPanel(); */
      console.log('done')
      
});

function checkInput(){
    const fnameValue = fname.value
    const lnameValue = lname.value
    const phoneValue = phone.value
    const emailValue = email.value
    const streetValue = street.value
    const zipValue = zipcode.value
    const districtValue = district.value

   
    // first name
    if(fnameValue ===''){
        setErrorFor(fname, 'First name must not be empty.')
        return false;
    }
    else if(!isText(fnameValue)){
        setErrorFor(fname, 'Please write letters.')
        return false;
    }
    else{
        setSuccessfor(fname)
      
     
    }

    //last name
    if(lnameValue ===''){
        setErrorFor(lname, 'Last name must not be empty.')
        return false;
    }
    else if(!isText(lnameValue)){
        setErrorFor(lname, 'Please write letters.')
        return false;
    }
    else{
        setSuccessfor(lname)
        
    }


     //phone
     if(phoneValue ===''){
        setErrorFor(phone, 'Phone must not be empty.')
        return false;
    }
    else{
        setSuccessfor(phone)
        
    }


    //email
    if(emailValue ===''){
        setErrorFor(email, 'Email must not be empty.')
        return false;
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid.')
        return false;
    }

    else{
        setSuccessfor(email)
       
    }


     //street
     if(streetValue ===''){
        setErrorFor(street, 'Street must not be empty.')
        return false;
    }
    else{
        setSuccessfor(street)
        
    }


     //zipcode
     if(zipValue ===''){
        setErrorFor(zipcode, 'Zipcode must not be empty.')
        return false;
    }
    else{
        setSuccessfor(zipcode)
       
    }


     //district
     if(districtValue ===''){
        setErrorFor(district, 'District must not be empty.')
        return false;
    }
    else{
        setSuccessfor(district)
       
        
    }
     console.log('well')
     addInput();
    return true;
   

}

//functions
function setErrorFor(input, message){
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');

    small.innerText = message;
    formGroup.className = 'form-group error'
}

function setSuccessfor(input){
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success'
}


function isText(text){
    return /^[a-zA-ZäöåÄÖÅ]+$/.test(text);
}


function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function addInput(){
   
      const user = []
      let users = new User(`${fname.value}`, `${lname.value}`, `${phone.value}`, `${email.value}`, `${street.value}`, `${zipcode.value}`, `${district.value}`);
      user.push(users)
      document.getElementById('flip').innerText = "Användare skapades!"
      console.log(user)
}