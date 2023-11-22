import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import generatePassword from "./postfunction.js";



let token=getCookie("login");
if (token === ""){
    window.location.replace("../");
}else{
    setInner("nama",tokenvalue);
    generatePassword();
}

