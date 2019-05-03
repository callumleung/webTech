function checkValidName(){

    var inputs = document.getElementsByTagName("input");
    var inputBox = inputs[0];

    console.log(inputBox);

    if(inputBox.value === "" || !inputBox.value.match("[a-zA-Z]") ){
        //alert("Please enter a valid name.");
        //inputBox.css('border-color', 'red');
        inputBox.style.backgroundColor = "#FDFF47";
        return false;
    }
    else {

        inputBox.style.backgroundColor = "white";
       return true;
    }
}

function checkQ1Response(score) {

    //grab the question 1 element
    var question1 = document.getElementsByTagName("select");
    //first appearance of a select input type
    var response = question1[0].value;

    if (response === ""){

        //change color of the question
        question1[0].style.backgroundColor = "#FDFF47";
        return false;
    } else {
        //valid input return background to original color if changed

        question1[0].style.backgroundColor = "white";
        return true;
    }
}

function checkQ2Response(score) {

    //get the required element
    var inputs = document.getElementsByTagName("input");
    //should be the second through fifth occurrence of an input type
    //TODO: maybe change inputs[x] to getElementsByID
    var Q2a = inputs[1];
    var Q2b = inputs[2];
    var Q2c = inputs[3];
    var Q2d = inputs[4];


    //count the number of checkboxes checked and ensure it equals 2
    var numResponses = 0;
    if (Q2a.checked){
        numResponses++;
    } if (Q2b.checked){
        numResponses++;
    } if (Q2c.checked){
        numResponses++;
    } if (Q2d.checked){
        numResponses++;
    }

    if (numResponses !== 2){
        //alert("Please select EXACTLY two responses to question 2.");
        //cant change the colour of the check boxes themselves so highlight the question

        document.getElementById("Q2").style.backgroundColor = "#FDFF47";

        return false;
    } else {


        document.getElementById("Q2").style.backgroundColor = "white";
        return true;
    }



}

function checkQ3Response(score) {
    var inputs = document.getElementsByTagName("input");

    //radio buttons correspond to inputs 5 through 8
    var Q3a = inputs[5];
    var Q3b = inputs[6];
    var Q3c = inputs[7];
    var Q3d = inputs[8];


    //check that at least one of the inputs is check

    if (!Q3a.checked && !Q3b.checked && !Q3c.checked && !Q3d.checked ){
        document.getElementById("Q3").style.backgroundColor = "#FDFF47";
        //alert("Please select a response to question 3.");
        return false;
    } else {
       //return the colour to normal
        document.getElementById("Q3").style.backgroundColor = "white";
        return true;
    }

}

function checkQ4Response (score) {

    var q4Response = document.getElementsByTagName("input")[9];


    if ( q4Response.value === "" || !q4Response.value.match("[a-zA-Z]")){
       // alert("Please answer question 4.");
        q4Response.style.backgroundColor = "#FDFF47";
        return false;
    } else {
        //reset the background colour
        q4Response.style.backgroundColor = "white";
        return true;
    }
}

function mark() {

    var score = 0;
    //get the answer to question one
    var q1answer = document.getElementsByTagName("select")[0].value;

    //check against correct answer
    if (q1answer === "c"){
        score++;
    }

    //question2
    //check if  options b and c are checked in question two
    //responses with more or fewer responses should have already been caught
    var q2b = document.getElementById("Q2b");
    var q2c = document.getElementById("Q2c");

    if (q2b.checked){
        score++;
    }
    if (q2c.checked){
        score++;
    }

    //question 3
    var q3a = document.getElementById("Q3a");
    if (q3a.checked){
        score++;
    }

    //question 4
    //cast response to lower case to ensure combinations of upper and lower are accepted
    var q4answer = document.getElementsByTagName("input")[9];
    if (q4answer.value.toLowerCase() === "Charles Barbier") {
        score++;
    }

    return score;
}


function validate() {
    //alert(document.getElementsByName("UserInfo"));


    
    var name = checkValidName();
    var q1 = checkQ1Response(score);
    var q2 = checkQ2Response(score);
    var q3 = checkQ3Response(score);
    var q4 = checkQ4Response(score);

    var score = mark();


    var alertString = "Questions requiring response: ";

    if (!name){
        alert("Please enter a name.");
    }

    if (!q1){
        alertString += "\nquestion 1";
    }

    if (!q2){
        alertString += "\nquestion 2";
    }

    if (!q3){
        alertString += "\nquestion 3";
    }

    if (!q4){
        alertString += "\nquestion 4";
    }

    if (alertString.length > 30){
        alert(alertString);
    }

    if (name && q1 && q2 && q3 && q4 ){
        alert("You have scored " + score.toString() +
            " out of a possible 5.\n Answers and scores will now be sent to the server");
        //set the score
        document.getElementsByTagName("input")[10].value = score.toString();
        return true
    } else {
        return false;

    }



}























