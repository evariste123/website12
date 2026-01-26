let loginForm=document.getElementById("loginForm");
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    {
       console.log("your email:",email);
       console.log("your password:",password);
    }
    {
        alert("welcome to Eva-Codes");
    }
})
let loginForm1=document.getElementById("loginForm");
loginForm.addEventListener('reset',()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    {
       console.log("your email:",email);
       console.log("your password:",password);
    }
    {
        alert("welcome! and thanks to become one of our patrners.clik ok to continue with our website.");
    }
})