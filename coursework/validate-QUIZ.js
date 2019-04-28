function checkValidName(){

    var inputBox = document.getElementsByName("UserInfo");
    console.log(inputBox.value);
    console.log(inputBox)

    if(typeof inputBox.value === 'undefined'  ){
        alert("Please enter a name.");
        return false;
    }
    else {
        alert("good name");
       return true;
    }
}

function checkQ1Response() {
    var response = document.getElementsByName("Q1");

    //console.log(response.)
    //alert(response.options[response.selectedIndex].value);

    console.log(response.value);
    console.log(response);
    //response.options[response.selectedIndex].value === ""
    if (true){
        alert("Please ensure that you have selected an answer for each question.");
        //response.style.backgroundColor = "yellow";
        return false;
    } else {
        alert("Doesnt realise no option chosen");
       //return true;
    }
}


function validate() {
    //alert(document.getElementsByName("UserInfo"));
    if (checkQ1Response()){
        //return true
    } else {
        return false;
    }

    //checkValidName();


}