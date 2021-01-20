
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
  document.getElementById("btn1").disabled = true;

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

    checkInput()
  
        addInput()
      
      
     
});

function checkInput(){
    const fnameValue = fname.value
    const lnameValue = lname.value
    const phoneValue = phone.value
    const emailValue = email.value
    const streetValue = street.value
    const zipValue = zipcode.value
    const districtValue = district.value
    let btnable = true
    
    
    // first name
    if(fnameValue ===''){
        setErrorFor(fname, 'First name must not be empty.')
        console.log("femp")
        btnable =  false;
    }
    else if(!isText(fnameValue)){
        setErrorFor(fname, 'Please write letters.')
        console.log("fle")
        btnable =  false;
    }
    else{
        setSuccessfor(fname)
      
     
    }

    //last name
    if(lnameValue ===''){
        setErrorFor(lname, 'Last name must not be empty.')
        console.log("lem")
        btnable =  false;
    }
    else if(!isText(lnameValue)){
        setErrorFor(lname, 'Please write letters.')
        console.log("lle")
        btnable =  false;
    }
    else{
        setSuccessfor(lname)
        
    }


     //phone
     if(phoneValue ===''){
        setErrorFor(phone, 'Phone must not be empty.')
        btnable =  false;
    }
    else{
        setSuccessfor(phone)
        
    }


    //email
    if(emailValue ===''){
        setErrorFor(email, 'Email must not be empty.')
        console.log("+++++")
        btnable =  false;
    }
    if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid.')
        console.log("emnot")
        btnable =  false;
    }

    else{
        setSuccessfor(email)
       
    }


     //street
     if(streetValue ===''){
        setErrorFor(street, 'Street must not be empty.')
        btnable =  false;
    }
    else{
        setSuccessfor(street)
        
    }


     //zipcode
     if(zipValue ===''){
        setErrorFor(zipcode, 'Zipcode must not be empty.')
        btnable =  false;
    }
    else{
        setSuccessfor(zipcode)
       
    }


     //district
     if(districtValue ===''){
        setErrorFor(district, 'District must not be empty.')
        btnable =  false;
    }
    else{
        setSuccessfor(district)
       
        
    }

    if(btnable){
        document.getElementById("btn1").disabled = false;
        console.log('xxxx')
        
        }
        else {
            document.getElementById("btn1").disabled = true;
} 
     console.log('well')
    return true
     
     /* if(true){
        console.log('wellbbbb')
          addInput();
     } */
    
   

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



function resetForm(){
    document.getElementById("btn1").disabled = true;
    var frmMain = document.forms[0]; 
    frmMain.reset();
    checkInput()
    console.log("gfgfgfg")
    }




function addInput(){
    console.log('ppp')
       const user = []
       
        console.log('wellbbbb')
          
     
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
    
  
  

 
    const fullnamediv = document.createElement("div");
    const showdiv = document.createElement("div");
    const partdiv = document.createElement("div");
    const div1 = document.createElement("div");
    const lblid = document.createElement("label");
    const spanid = document.createElement("span");
    const div2 = document.createElement("div");
    const lblemail = document.createElement("label");
    const spanemail = document.createElement("span");
    const div3 = document.createElement("div");
    const lblphone = document.createElement("label");
    const spanphone = document.createElement("span");
    const part1div = document.createElement("div");
    const streetdiv = document.createElement("div");
    const spanzip = document.createElement("span");
    const spandist = document.createElement("span");
    

   
    
    fullnamediv.id="fullname"
    panelDiv.appendChild(fullnamediv)
    
    showdiv.classList.add('show')
    panelDiv.appendChild(showdiv)
    
    partdiv.id = "part"
    partdiv.classList.add('part')
    showdiv.appendChild(partdiv)
    
    partdiv.appendChild(div1)
    
    div1.appendChild(lblid)
    lblid.innerText="Id"
    spanid.id = "userId"
    div1.appendChild(spanid)
    
    partdiv.appendChild(div2)
    
    div2.appendChild(lblemail)
    lblemail.innerText="E-post"
    spanemail.id = "userEmail"
    div2.appendChild(spanemail)
    
    partdiv.appendChild(div3)
    
    div3.appendChild(lblphone)
    lblphone.innerText="Telephone"
    spanphone.id = "userphone"
    div3.appendChild(spanphone)
    
    part1div.classList.add('part')
    showdiv.appendChild(part1div)
    
    streetdiv.id="userstreet"
    part1div.appendChild(streetdiv)
    spanzip.id = "userzip"
    part1div.appendChild(spanzip)
    spandist.id = "userdist"
    part1div.appendChild(spandist)
    
    console.log(fullnamediv)
    
    document.getElementById('flip').innerText = `${users.fname}` + ` ${users.lname}`;
    document.getElementById('fullname').innerText = `${users.fname}` + ` ${users.lname}`;
    document.getElementById('userId').innerText = users.id;
    document.getElementById('userEmail').innerText = `${users.email}` ;
    document.getElementById('userphone').innerText = `${users.phone}`;
    document.getElementById('userstreet').innerText = `${users.street}`;
    document.getElementById('userzip').innerText = `${users.zipcode},`;
    document.getElementById('userdist').innerText = `${users.district}`;

    resetForm()

 



   
    

}
    





 







