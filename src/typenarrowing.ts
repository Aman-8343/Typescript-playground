function getin(kind : string |number){
    if(typeof kind==='string'){
        return `${kind} is string`;
    }
    return `${kind} is number`;
}

function getmsg(msg?: string){
    if(!msg){
        return "no msg found";
    }   
    return msg.toUpperCase();
}