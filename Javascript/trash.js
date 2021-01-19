
      const flipdiv = document.createElement("div");
      const part2div = document.getElementById("part2")
      const paneldiv = document.createElement("div");
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
      
      part2div.appendChild(flipdiv)
      
      flipdiv.id="flip"
      flipdiv.classList.add('flip')
      
      paneldiv.id="panel"
      paneldiv.classList.add('panel')
      flipdiv.appendChild(paneldiv)
      
      fullnamediv.id="fullname"
      paneldiv.appendChild(fullnamediv)
      
      showdiv.classList.add('show')
      paneldiv.appendChild(showdiv)
      
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
      
      document.getElementById('flip').innerText = `${users.fname}` + ` ${users.lname}`
      document.getElementById('fullname').innerText = `${users.fname}` + ` ${users.lname}`
      document.getElementById('userId').innerText = users.id
      document.getElementById('userEmail').innerText = `${users.email}` 
      document.getElementById('userphone').innerText = `${users.phone}`
      document.getElementById('userstreet').innerText = `${users.street}`
      document.getElementById('userzip').innerText = `${users.zipcode}`
      document.getElementById('userdist').innerText = `${users.district}`

      for(let i=0; i<user.length; i++) {
        
        document.querySelector('flip').innerText += `${users.fname}` + ` ${users.lname}`
        document.querySelector('fullname').innerText += `${users.fname}` + ` ${users.lname}`
        document.querySelector('userId').innerText += users.id
        document.querySelector('userEmail').innerText += `${users.email}` 
        document.querySelector('userphone').innerText += `${users.phone}`
        document.querySelector('userstreet').innerText += `${users.street}`
        document.querySelector('userzip').innerText += `${users.zipcode}`
        document.querySelector('userdist').innerText += `${users.district}`
     
    }
        
        
            
         
        