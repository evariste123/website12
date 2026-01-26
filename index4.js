let createForm=document.getElementById("createForm");
createForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const firstname=document.getElementById("firstname").value;
    const lastname=document.getElementById("lastname").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    {
        console.log("your first name:",firstname);
        console.log("your last name:",lastname);
        console.log("your email:",email);
        console.log("your password:",password)
    }
    {
        alert("Now! your account is updated")
    }
})
let gender=document.getElementById("gender");
gender.addEventListener('click',(e)=>{
    e.preventDefault();
    const gender=document.getElementById("gender").value;
    console.log(gender);
    {
        alert("your gender have been choosen!")
    }
})
let date=document.getElementById("date");
date.addEventListener('submit',(e)=>{
    e.preventDefault();
    const date=document.getElementById("date").value;
    {
        console.log("your birth date:",date);
    }
    {
        alert("your birth date now is updated");
    }
})
let confirmForm=document.getElementById("confirmForm");
confirmForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const Email=document.getElementById("Email").value;
    const Password=document.getElementById("Password").value;
    {
        console.log("your Email:",Email);
        console.log("your Password:",Password);
    }
    {
        alert("Your Account have been confirmed!")
    }
})

let confirmForm1=document.getElementById("confirmForm");
confirmForm.addEventListener('reset',()=>{
    const Email=document.getElementById("Email").value;
    const Password=document.getElementById("Password").value;
    {
        console.log("your Email:",Email);
        console.log("your Password:",Password);
    }
    {
        alert("click the button ok to continue!")
    }
})