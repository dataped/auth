import { setInner } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

let token=getCookie("login");
if (token === ""){
    window.location.replace("../");
}else{
    setInner("nama","Yeay ini dia token kakak: "+token);
}

