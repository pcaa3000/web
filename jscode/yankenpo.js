const piedra = 0;
const papel = 1;
const tijera = 2;

function jankenpon(user, pc) {
    if (user != pc) {
        if (
		(user === piedra && pc === tijera) || 
		(user === papel && pc === piedra) || 
		(user === tijera && pc === papel) 
        ){
            console.log("You Win!! - " + user + " > "+pc)
        }
        else{
            console.log("Computer Win! - " + pc + " > "+user)
        }
    }
    else if(user === pc) {
        console.log("Nobody win. - " +user)
    }
    else {
        console.log("Not valid option")
    }
};

var pc = Math.floor(Math.random()* 3);
jankenpon(tijera,pc);
