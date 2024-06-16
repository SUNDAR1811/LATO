

function validate5() {

    let name = document.getElementById('Name').value
    let email = document.getElementById('Email').value
    let phone = document.getElementById('Phone').value
    let address = document.getElementById('Address').value
    let password = document.getElementById('Password').value

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   
   
    if (name == "" || name.length>=15) {
        document.getElementById('error').textContent = "Please enter a valid name";


    }else{
        error.textContent = ""
       
    }
   
    if (email == ""||!email.match(validRegex)) {
        document.getElementById('error1').textContent = "Please enter a valid email"; 
 
    }
    else{
        error1.textContent = ""
       
    }

    
    if (phone == "" || phone.length >9|| phone.length<10) {
        document.getElementById('error2').textContent = "Please enter a valid phone"; 
    
    }
    else{
        error2.textContent = ""
        
    }


   
    if (address == "" || address.length>=500) {
        document.getElementById('error3').textContent = "Please enter a valid address"; 

    }
    else{
        error3.textContent = " "
       
    }
    
    if (password == "" || password.match(validRegex)) {
        document.getElementById('error4').textContent = "Please enter a valid password";
         
    }
    else{
        error4.textContent = " "
        
    }
    let Button = document.getElementById('button')
    if(name !== ""&& email !== "" && phone !== "" && address !== "" && password !== ""){
        Button.disabled = false;
    }else{
        Button.disabled = true;
    }
  }

  function validate4() {
    let name = document.getElementById('Name').value
    let email = document.getElementById('Email').value
    let phone = document.getElementById('Phone').value
    let address = document.getElementById('Address').value
    

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   
   
    if (name == "" || name.length>=15) {
        document.getElementById('error').textContent = "Please enter a valid name";
        
       
    }else{
        error.textContent = ""
    }
    
    if (email == ""||!email.match(validRegex)) {
        document.getElementById('error1').textContent = "Please enter a valid email"; 
        
         
    }
    else{
        error1.textContent = ""
    }

   
    if (phone == "" || phone.length>10) {
        document.getElementById('error2').textContent = "Please enter a valid phone"; 
        
       
    }
    else{
        error2.textContent = ""
    }



    if (address == "" || address.length>=500) {
        document.getElementById('error3').textContent = "Please enter a valid address"; 
         
    }
    else{
        error3.textContent = " "
    }
    let password = document.getElementById('Password').value 
    let Button = document.getElementById('button')
    if(name !== ""&& email !== "" && phone !== "" && address !== "" && password !== ""){
        Button.disabled = false;
    }else{
        Button.disabled = true;
    }
  }

  function validate3() {

    let name = document.getElementById('Name').value
    let email = document.getElementById('Email').value
    let phone = document.getElementById('Phone').value
    
   

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   
    
    if (name == "" || name.length>=15) {
        document.getElementById('error').textContent = "Please enter a valid name";
        
    }else{
        error.textContent = ""
    }
   
    if (email == ""||!email.match(validRegex)) {
        document.getElementById('error1').textContent = "Please enter a valid email"; 
        
    }
    else{
        error1.textContent = ""
    }

   
    if (phone == "" || phone.length>10) {
        document.getElementById('error2').textContent = "Please enter a valid phone"; 
       
    }
    else{
        error2.textContent = ""
    }
   
    let address = document.getElementById('Address').value
    let password = document.getElementById('Password').value
    let Button = document.getElementById('button')
    if(name !== ""&& email !== "" && phone !== "" && address !== "" && password !== ""){
        Button.disabled = false;
    }else{
        Button.disabled = true;
    }
  }

  function validate2() {
    let name = document.getElementById('Name').value
    let email = document.getElementById('Email').value
 
    

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   
   
    if (name == "" || name.length>=15) {
        document.getElementById('error').textContent = "Please enter a valid name";
       
    }else{
        error.textContent = ""
    }
   
    if (email == ""||!email.match(validRegex)) {
        document.getElementById('error1').textContent = "Please enter a valid email"; 
       
    }
    else{
        error1.textContent = ""
    }
   
    let phone = document.getElementById('Phone').value
    let address = document.getElementById('Address').value
    let password = document.getElementById('Password').value
    let Button = document.getElementById('button')
    if(name !== ""&& email !== "" && phone !== "" && address !== "" && password !== ""){
        Button.disabled = false;
    }else{
        Button.disabled = true;
    }
  }


  
  function validate1() { 

    let name = document.getElementById('Name').value
    if (name == "" || name.length>=15|| name.invalid) {
        document.getElementById('error').textContent = "Please enter a valid name";
        
    }else{
        error.textContent = ""
    }
    
    let email = document.getElementById('Email').value
    let phone = document.getElementById('Phone').value
    let address = document.getElementById('Address').value
    let password = document.getElementById('Password').value
    let Button = document.getElementById('button')
    if(name !== ""&& email !== "" && phone !== "" && address !== "" && password !== ""){
        Button.disabled = false;
    }else{
        Button.disabled = true;
    }
  }

  
  