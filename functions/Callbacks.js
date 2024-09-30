// Callbacks
// A function parsed as an argument to other function

const greetUser = (username,callback) => {
    if(callback){
        console.log(callback(username));
    }
    else{
        console.log(username)
    }
   
}

const cb = username => {
    return " Hello " + username;
}