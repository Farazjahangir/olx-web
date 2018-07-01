
var form = document.getElementById("form");
var errMessage = document.getElementById("error-message");
var modal = document.getElementById("modal");
var userUid;
// Listener For Signup
form.addEventListener("submit" , (e)=>{
    e.preventDefault();
    var userName = document.getElementById('username');
    var email = document.getElementById("email");
    var password = document.getElementById("pwd");
    var againPassword = document.getElementById("re-pwd");
    var userObj = {
        userName : userName.value,
        email : email.value
    }
    modal.style.display = "block"
    if(userName.value === ""){
        errMessage.innerText = "Username is required"
        modal.style.display = "none"        
        return false
    }
    if(password.value !== againPassword.value){
        errMessage.innerText = "Passwords are incorrect"
        password.value = ""
        againPassword.value = ""
        modal.style.display = "none"                
        return false;
    }
    auth.createUserWithEmailAndPassword(email.value, password.value)
        .then((data)=>{
            userUid = data.user.uid;
            localStorage.setItem("userUid" , userUid);
            db.collection("users")
            .doc(userUid)
            .set(userObj)
            .then(()=>{
            modal.style.display = "none"                        
            })               
        })
        .catch((err)=>{
            modal.style.display = "none"                                    
            errMessage.innerText = err.message;
            email.value = ""
            password.value = ""
            againPassword.value = ""
        })
})

