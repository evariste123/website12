let SignForm=document.getElementById("SignForm");
SignForm.addEventListener('submit',(e)=>{
    e.preventDefault(e);
    const FullName=document.getElementById("FullName").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    {
        console.log("your full name:",FullName);
        console.log("your email:",email);
        console.log("your password:",password)
    }
    {
        alert("fetching start to signUp to your account");
    }
})