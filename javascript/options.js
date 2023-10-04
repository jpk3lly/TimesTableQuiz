const timerDropdown = document.querySelector("#timer");
const numberOfQuestionsDropdown = document.querySelector("#total-questions");
const confirmButton = document.getElementById("confirm-choices");

let timerOn = false;
numberOfQuestionsDropdown.value

timerToggle = () => {
    if(timerDropdown.value == 'On'){
        timerOn = true;
    }
    else{
        timerOn = false;
    }};

howManyQuestions = () => {
    noOfQuestions = numberOfQuestionsDropdown.value;
    console.log(noOfQuestions);
};

confirmChoices = () =>{

    console.log(numberOfQuestionsDropdown.value);
    localStorage.setItem('timerOn', timerOn);
    localStorage.setItem('noOfQuestions', numberOfQuestionsDropdown.value);
    window.location.assign('game.html');
}

confirmButton.addEventListener("click", e => {
    confirmChoices();
});