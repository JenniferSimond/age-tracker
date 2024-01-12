function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

function calculate() {
    let userInput = document.getElementById("date");
    let birthDate = new Date(userInput.value);

    let date1 = birthDate.getDate();
    let month1 = birthDate.getMonth() + 1;
    let year1 = birthDate.getFullYear();

    let today = new Date();
    let date2 = today.getDate();
    let month2 = today.getMonth() + 1;
    let year2 = today.getFullYear();

    let currentYear = year2 - year1;
    let currentMonth;
    let currentDate;

    if (month2 >= month1) {
        currentMonth = month2 - month1;
    } else {
        currentYear--;
        currentMonth = 12 + month2 - month1;
    }

    if (date2 >= date1) {
        currentDate = date2 - date1;
    } else {
        currentMonth--;
        currentDate = getDaysInMonth(year1, month1) + date2 - date1;
    }

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }

    // Output or process the age data
    console.log(`Age: ${currentYear} years, ${currentMonth} months, and ${currentDate} days.`);
}

// Setting maximum date input value to today and adding event listener for the calculate button
document.addEventListener("DOMContentLoaded", () => {
    let userInput = document.getElementById("date");
    userInput.max = new Date().toISOString().split('T')[0];

    let calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculate);
});
