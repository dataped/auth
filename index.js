import { setInner } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

let token=getCookie("login");
if (token === ""){
    window.location.replace("../");
}else{
    setInner("Yeay ini dia token kakak: ","Bambang Pamungkas "+token);
    //window.location.replace("./signup");
}

