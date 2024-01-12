// Main video resource for project ^Resource_1: https://youtu.be/_pw8vk1tAhs?si=b0gVQRBP09ddLVHl

/* Func calaculates the number of days in a month for a given year.
    Date constructor() ^Resource_2: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date */
function getDaysInMonth(year, month) {
    /*the 0 is where we set day parameter to 0 so return last day of previous month. to get 
    the num of days in the given month.*/
    return new Date(year, month, 0).getDate();
}
// Func calculates age based on user input & current date.
  // "+1" added to month becuase JavaScript is a count from zero language, so Jan has an index of.
function calculate() {
    let userInput = document.getElementById("date");
    let birthDate = new Date(userInput.value);

    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1;
    let birthYear = birthDate.getFullYear();

    /* the "new" keyword is used in JavaScript to create an object from a constructor function. 
    The "new" keyword has to be placed before the constructor func call ^Resource_3: https://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript#:~:text=The%20new%20keyword%20is%20used,the%20constructor%20function's%20prototype%20property */
    let today = new Date();
    let currentDay = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();

    let yearDifference = currentYear - birthYear;
    let monthDifference;
    let dayDifference;

    if (currentMonth >= birthMonth) {
        monthDifference = currentMonth - birthMonth;
    } else {
        yearDifference--;
        monthDifference = 12 + currentMonth - birthMonth;
    }

    if (currentDay >= birthDay) {
        dayDifference = currentDay - birthDay;
    } else {
        monthDifference--;
        dayDifference = getDaysInMonth(birthYear, birthMonth) + currentDay - birthDay;
    }

    if (monthDifference < 0) {
        monthDifference = 11;
        yearDifference--;
    }

    // Output or process the age data
    console.log(`Age: ${yearDifference} years, ${monthDifference} months, and ${dayDifference} days.`);
}

// Setting maximum date input value to today and adding event listener for the calculate button
document.addEventListener("DOMContentLoaded", () => {
    let userInput = document.getElementById("date");
    userInput.max = new Date().toISOString().split('T')[0];

    let calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculate);
});
