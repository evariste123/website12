let register=document.getElementById("register");
register.addEventListener('submitt',(e)=>{
    e.preventDefault();
    const FirstName=document.getElementById("FirstName").value;
    const mail=document.getElementById("mail").value;
    const pass=document.getElementById("pass").value;
    const message=document.getElementById("message").value;
    {
        console.log("First name:",FirstName);
        console.log("email:",mail);
        console.log("password:",pass);
        console.log("message:",message);
    }
    {
        alert("Now! you have been registered-sign");
        let color=document.querySelector("color");
        console.log(color);
    }
})
let language=document.getElementById("language");
language.addEventListener('click',(e)=>{
    e.preventDefault();
    const language=document.getElementById("language").value;
    {
        console.log("language changed is:",language);
    }
    {
        alert("Now! your language have been changed.");
    }
})
let contactForm=document.getElementById("contactForm");
contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const fname=document.getElementById("fname").value;
    const Email=document.getElementById("Email").value;
    const Password=document.getElementById("Password").value;
    const Message1=document.getElementById("Message1").value;
    {
        console.log("first name:",fname);
        console.log("Email:",Email);
        console.log("password:",Password);
        console.log("Message1:",Message1);
    }
    {
        alert("your request have been received");
    }
})

let contactForm1=document.getElementById("contactForm");
contactForm.addEventListener('reset',()=>{
    const fname=document.getElementById("fname").clear;
    const Email=document.getElementById("Email");
    const Password=document.getElementById("Password");
    const Message1=document.getElementById("Message1");
    {
        console.log("first name:",fname);
        console.log("Email:",Email);
        console.log("password:",Password);
        console.log("Message1:",Message1);
    }
    {
        alert("click refresh button to continue!");
    }
})