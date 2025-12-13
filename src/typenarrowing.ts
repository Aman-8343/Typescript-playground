function getin(kind : string |number){
    if(typeof kind==='string'){
        return `${kind} is string`;
    }
    return `${kind} is number`;
}