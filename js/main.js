let emailList = ["mail1@email.com", "mail2@email.com", "mail3@email.com", "mail4@email.com",]; //Array mail

let result = document.getElementById("result"); //Assegno il div in cui mettere il risultato

function checkEmail(){

    let emailToCheck = document.getElementById("mailInput").value; //recupero la mail da controllare

    let Check = false; //creo una variabile di controllo false di default

    for(let i = 0 ; i < emailList.length ; i++){

        let currentMail = emailList[i]; //creo una variabile di appoggio col valore corrente dell'array
    
        if(emailToCheck == currentMail && Check == false){
            Check = true; //effettuo un controllo confrontando la mail inserita con quella dell'elemento corrente dell'array
                          //il controllo avverrà fin quando verrà trovata la mail oppure fino alla fine dell'array se la mail
                          //non c'è, se la mail viene trovata nell'array Check viene impostato su True
        }
    }
    
    if(Check){
        result.innerText = "SEI AUTORIZZATO"
    }else{     //In base alla variabile Check (true o false) avviso l'utente del risultato nel dom
        result.innerText = "NON SEI AUTORIZZATO";
    }
}

