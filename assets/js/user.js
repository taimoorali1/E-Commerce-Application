console.log("Login Script Is working");


const login = async () => {

    let emailValue = document.getElementById('userName').value;
    let passwordValue = document.getElementById('password').value;

    try {
        const response = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: 'kminchelle',
                password: '0lelplR',

                // expiresInMins: 60, // optional
            })
        })
        const data = await response.json();
        console.log(data);
        localStorage.setItem("User", JSON.stringify(data));

    }
    catch (error) {
        console.log(error)
    }



    let userData = JSON.parse(localStorage.getItem('User'));
    console.log(userData);
    localStorage.setItem("userToken", JSON.stringify(userData.token));
    let userLoginToken = JSON.parse(localStorage.getItem("userToken"));
    console.log(userLoginToken);

    if (userLoginToken) {
        window.location.href = "home.html";
    }
    else if (userLoginToken == "") {
        alert("Error .. NO user Login Token Missing");
    }

}


 function logOut(){
    window.location.href="login.html";
 }








