let save=document.getElementById("save");
save.addEventListener('click',(e)=>{
    e.preventDefault();
    {
        alert("this is our service that we provide to our clients:1.graphics design, 2:UX and UI design ,3:code-lote ,4:hosting website, 5:web management.");
    }
})
let get=document.getElementById("get");
get.addEventListener('click',(e)=>{
    e.preventDefault();
    let firstname="first name";
    let lastname="last name";
    let password="passwor";
    prompt('enter your first name');
    prompt('enter your last name');
    prompt('enter your password');
    {
        console.log("first name:",firstname);
        console.log("last name:",lastname);
        console.log("password:",password);
    }
    {
        alert("Now! you have been get our info");
    }
})