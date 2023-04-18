let emailList = ["mail1@email.com", "mail2@email.com", "mail3@email.com", "mail4@email.com",];

let emailToCheck = prompt("Inserisci la tua mail");
let Check = false;


for(let i = 0 ; i < emailList.length ; i++){

    let currentMail = emailList[i];

    if(emailToCheck == currentMail){
        Check = true;
    }
}

if(Check){
    alert("Sei autorizzato!");
}else{
    alert("NON sei autorizzato!");
}