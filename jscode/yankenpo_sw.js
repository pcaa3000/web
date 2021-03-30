const piedra = 0;
const papel = 1;
const tijera = 2;

function jankenpon(user, pc) {    
    switch(true){
        case (user == piedra && pc == tijera):
        case (user == papel && pc == piedra):
        case (user == tijera && pc == papel):
            console.log("You Win!! - " + user + " > "+pc);
            break;
        case (user != pc):
            console.log("Computer Win! - " + pc + " > "+user);
            break;
        case (user == pc):
            console.log("Nobody win. - " +user);
            break;        
        default:
            console.log("Not valid option");
    }    
};

var pc = Math.floor(Math.random()* 3);
jankenpon(tijera,pc);
