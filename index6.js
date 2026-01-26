let formID=document.getElementById("formID");
formID.addEventListener('submit',(e)=>{
    e.preventDefault();
    {
        const Email=document.getElementById("Email").value;
    }
    {
        console.log("your email:",Email);
    }
    {
        alert("Get your resources from our website!");
    }
})
let language=document.getElementById("language");
language.addEventListener('click',(e)=>{
    e.preventDefault();
    {
        const language=document.getElementById("language").value;
    }
    {
        console.log("your language:",language);
    }
    {
        alert("translating language...");
    }
})
