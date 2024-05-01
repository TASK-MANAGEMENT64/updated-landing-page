
function Check(){

    var correct = true;
    if(!document.getElementById("CBTYC").checked){
        alert("Users must accept the terms and conditions");
        correct = false;
    }
    else{
        if(document.getElementsByName("name")[0].value == '' ||
        document.getElementsByName("age")[0].value == '' || 
        document.getElementsByName("pass")[0].value == '' || 
        document.getElementsByName("passC")[0].value == ''){
            alert("Missing Information");
            correct = false;
        }
    
    else if (!document.getElementById("REmail").value.includes('@')){
        alert("Enter a valid email");
        correct = false;
    }
    
    else if(document.getElementsByName("age")[0].value <0 || document.getElementsByName("age")[0].value >120){
        alert("Enter a valid age");
        correct = false;
    }

    else if(document.getElementsByName("pass")[0].value != document.getElementsByName("passC")[0].value){
        alert("The password do not match");
        correct = false;
    }
    }

    if (correct) {
        window.location.href = "index.html";
      }

}

function Correct(){

    var correct = true;
    
    if(document.getElementById("ISEmail").value == '' ||
        document.getElementsByName("pass")[0].value == '' ){
        alert("Missing Information");
        correct = false;
    }
    else if (!document.getElementById("LGEmail").value.includes('@')){
        alert("Enter a valid email");
        correct = false;
    }
    
    if (correct) {
        window.location.href = "index.html";
      }

}