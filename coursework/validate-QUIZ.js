function checkValidName(){

    var inputs = document.getElementsByTagName("input");
        //document.getElementsByName("UserInfo");
    var inputBox = inputs[0];

    console.log(inputBox);

    const defaultColour = inputBox.style.backgroundColor;

    if(inputBox.value === ""  ){
        alert("Please enter a name.");
        //inputBox.css('border-color', 'red');
        inputBox.style.backgroundColor = "#FDFF47";
        return false;
    }
    else {
        //TODO: improve color change, current does not revert to original style
        inputBox.style.backgroundColor = defaultColour;


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


    checkValidName();

    return false;
}