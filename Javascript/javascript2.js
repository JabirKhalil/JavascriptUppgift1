
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
   /* createElement () 
    fillPanel() */
    
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
const user = []
let users 
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
      let users = new User(`${fname.value}`, `${lname.value}`, `${phone.value}`, `${email.value}`, `${street.value}`, `${zipcode.value}`, `${district.value}`, `${district.value}`);
      
      user.push(users) 

     /* var e = document.getElementById("part2");
      e.id = users.id;
       var currentDiv = document.getElementById('part2');
      currentDiv.appendChild("div")
      userDiv.appendChild(flipDiv)
    userDiv.appendChild(panelDiv)
      for(let i=0; i < user.length; i++) {
        document.getElementById('flip').innerText = `${users.fname}` + ` ${users.lname}`
        document.getElementById('fullname').innerText = `${users.fname}` + ` ${users.lname}`
        document.getElementById('userId').innerText = users.id
        document.getElementById('userEmail').innerText = `${users.email}` 
        document.getElementById('userphone').innerText = `${users.phone}`
        document.getElementById('userstreet').innerText = `${users.street}`
        document.getElementById('userzip').innerText = `${users.zipcode}`
        document.getElementById('userdist').innerText = `${users.district}`
        
        
        //document.querySelector('userEmail').innerHTML += `<div><span>${users.email}</div>`
        //console.log(user[i]);
      }  */
      //console.log(e.id) 
      
    
      
//createElement()
//fillPanel()
        

const userDiv = document.createElement('div')
const flipDiv = document.createElement('div')
const panelDiv = document.createElement('div')

// giv them class & ID
flipDiv.className = "flip"
panelDiv.className = "panel"
userDiv.id = `user`
flipDiv.id = `flip`
panelDiv.id = `panel`

  


  
var currentDiv = document.getElementById('part2');
currentDiv.appendChild(userDiv)
userDiv.appendChild(flipDiv)
userDiv.appendChild(panelDiv)
    console.log(user)
  
    displayname = document.createElement("div")
    displayname.id ="displayname"
    flipDiv.appendChild(displayname)
    displayname.innerText = `${users.fname}` + ` ${users.lname}`

    btnElement = document.createElement("button")
    btnElement.classList.add("btn")
    btnElement.id = "btn"
    flipDiv.appendChild(btnElement)
    iconElement = document.createElement("i")
    iconElement.classList.add("fa")
    iconElement.innerHTML="&#xf063;"
    btnElement.appendChild(iconElement) 

    idElement = document.createElement("p")
    idElement.innerText = `Id: ${users.id}`
  
    emailElement = document.createElement("p")
    emailElement.innerText = `E-mail: ${users.email}`
    emailElement.id = `${users.id}-email`
  
    phoneElement = document.createElement("p")
    phoneElement.innerText = `Phone: ${users.phone}`
    phoneElement.id = `${users.id}-phone`
  
    panelDiv.appendChild(idElement)
    panelDiv.appendChild(emailElement)
    panelDiv.appendChild(phoneElement) 

    var element = document.getElementById("btn");
    element.onclick = function( myFunction) {
      console.log( myFunction);
    
    }
    

    
    
}




 







/* function createElement () {
    // CREATE ELEMENT
    const userDiv = document.createElement('div')
    const flipDiv = document.createElement('div')
    const panelDiv = document.createElement('div')
  
    // giv them class & ID
    flipDiv.className = "flip"
    panelDiv.className = "panel"
    userDiv.id = `user`
    flipDiv.id = `flip`
    panelDiv.id = `panel`
  
  	
    flipDiv.innerText = `${users.fname}` + ` ${users.lname}`
  
  	
    var currentDiv = document.getElementById('part2');
    currentDiv.appendChild(userDiv)
    userDiv.appendChild(flipDiv)
    userDiv.appendChild(panelDiv)
  }

  function fillPanel() {
    idElement = document.createElement("div")
    idElement.innerText = `Id: ${users.id}`
  
    emailElement = document.createElement("p")
    emailElement.innerText = `E-mail: ${users.email}`
    emailElement.id = `${users.id}-email`
  
    phoneElement = document.createElement("p")
    phoneElement.innerText = `Phone: ${users.phone}`
    phoneElement.id = `${users.id}-phone`
  
    panelDiv.appendChild(idElement)
    panelDiv.appendChild(emailElement)
    panelDiv.appendChild(phoneElement)
  } */
 