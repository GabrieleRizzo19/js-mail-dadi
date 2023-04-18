let emailList = ["mail1@email.com", "mail2@email.com", "mail3@email.com", "mail4@email.com",];

let result = document.getElementById("result");

function checkEmail(){

    let emailToCheck = document.getElementById("mailInput").value;

    console.log(emailToCheck);
    let Check = false;

    for(let i = 0 ; i < emailList.length ; i++){

        let currentMail = emailList[i];
    
        if(emailToCheck == currentMail){
            Check = true;
        }
    }
    
    if(Check){
        result.innerText = "SEI AUTORIZZATO"
    }else{
        result.innerText = "NON SEI AUTORIZZATO";
    }
}

