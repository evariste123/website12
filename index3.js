let resetForm=document.getElementById("resetForm");
resetForm.addEventListener('submit',(e)=>{
    e.preventDefault(e);
    const email=document.getElementById("email").value;
    {
        console.log("your email:",email);
    }
    {
        alert("now! your password have beeen reseted")
    }
})