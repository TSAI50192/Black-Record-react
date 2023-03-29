import {useEffect} from 'react';


function Loginmain(){
    useEffect(() => {
        const loginText = document.querySelector(".title-text .login");
        const loginForm = document.querySelector("form.login");
        const loginBtn = document.querySelector("label.login");
        const signupBtn = document.querySelector("label.signup");
        const signupLink = document.querySelector("form .signup-link");
        // const signupFrom = document.querySelector("form.login");
        // const signupText = document.querySelector("from.login");
    
        signupBtn.onclick = () => {
            loginForm.style.marginLeft = "-50%";
            loginText.style.marginLeft = "-50%";
            };
            loginBtn.onclick = () => {
            loginForm.style.marginLeft = "0%";
            loginText.style.marginLeft = "0%";
            };
    //         signupLink.onclick = (e) => {
    //             e.preventDefault();
    //         signupBtn.click();
    //         return false;
    // };
    });
}

export default Loginmain;