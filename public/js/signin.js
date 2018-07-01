var form = document.getElementById("form");
var errMessage = document.getElementById("error-message");
var modal = document.getElementById("modal");

form.addEventListener("submit" , (e)=>{
    e.preventDefault();

    var email = document.getElementById("email");
    var password = document.getElementById("pwd");
    modal.style.display = "block"
    if(email.value === "" || password.value === ""){
        errMessage.innerText = "Fill All The Fields"
        modal.style.display = "none"        
        return false
    } 
    auth.signInWithEmailAndPassword(email.value , password.value)
        .then((data)=>{
            var userUid = data.user.uid
            localStorage.setItem("userUid" , userUid);
            console.log(userUid);
            console.log("done");
            modal.style.display = "none"                                           
        })
        .catch((err)=>{
            modal.style.display = "none"                    
            errMessage.innerText = err.message;
            email.value = ""
            password.value =""
        })
})