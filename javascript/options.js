const timerDropdown = document.getElementById("timer");
const numberOfQuestionsDropdown = document.getElementById("total-questions");

let noOfQuestions;
let timerOn = false;


timerToggle = () => {
    if(timerDropdown.value === true)
    {timerOn = true;}

};

howManyQuestions = () => {
    noOfQuestions = numberOfQuestionsDropdown;
    console.log(noOfQuestions.value);
};

confirmChoices = () =>{
    timerToggle();
    howManyQuestions();
}


confirmChoices();