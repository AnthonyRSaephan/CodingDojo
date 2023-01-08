function loginout(element){
    if(element.innerText == "Login"){
        element.innerText = "Logout";
    }else{
        element.innerText = "Login";
    }
}

function addDefinition(element){
    element.remove();
}

