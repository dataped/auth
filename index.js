import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import {setInner,getValue} from "https://jscroot.github.io/element/croot.js";



let token=getCookie("login");
if (token === ""){
    window.location.replace("../");
}else{
    setInner("nama",token);
}

