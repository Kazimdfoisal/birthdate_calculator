import { threeInputs } from "./array.js";
import { inBirthData } from "./functions.js";
import { age } from "./document.js";

window.addEventListener("load", () => {
    for (const data of threeInputs) {
        document.getElementById("dataEntry").innerHTML += inBirthData(data);
    }
    document.getElementById("ageShow").innerHTML = "_" + " Years " + "<br>" + "_" + " Months " + "<br>" + "_" + " Days";
});


function validateBirthDate({
    day,
    month,
    year,
    isLeapYear
    
}) {
    var messageLabelDayEl = document.getElementById("msgDay");
    var messageLabelMonthEl = document.getElementById("msgMonth");
    var messageLabelYearEl = document.getElementById("msgYear");



    /* TODO: Move logic to switch case */
    if (day == "" || month == "" || year == "") {
        return false;
    }
    else if (isLeapYear) {
        return false;
    }
    else if (day >= "32" || day <= "0") {
        messageLabelDayEl.innerText = "Days (1-31)";
        return false;
    }
    else if (month >= "13" || month <= "0") {
        messageLabelMonthEl.innerText = "Months 1-12";
        return false;
    }
    else if (year >= "3001" || year <= "1899") {
        messageLabelYearEl.innerText = "Years 1900-3000";
        return false;
    }

    messageLabelDayEl.innerText = "";
    messageLabelMonthEl.innerText = "";
    messageLabelYearEl.innerText = "";


    return true;
}


function calculateBirthDate({ day, month, year }) {
    const today = new Date();
    let currDay = today.getDate();
    let currMonth = 1 + today.getMonth();
    let currYear = today.getFullYear();
    const isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

    const monthDays = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day > currDay) {
        currDay += monthDays[currMonth - 1];
        currMonth--;
    }
    if (month > currMonth) {
        currMonth += 12;
        currYear--;
    }

    let days = currDay - day;
    let months = currMonth - month;
    let years = currYear - year;

    if (months < 0) {
        years--;
        months += 12;
    }

    return {
        days,
        months,
        years,
        isLeapYear
    }
}



function getBirthDateValues() {
    const day = Number(document.getElementById("days").value);
    const month = Number(document.getElementById("months").value);
    const year = Number(document.getElementById("years").value);


    return { day, month, year };
}



age.addEventListener("click", () => {
    const userBirthDate = getBirthDateValues();
    console.log (userBirthDate);
    const isUserBirthDateValid = validateBirthDate(userBirthDate);
    if (!isUserBirthDateValid) return;

    const calculatedUserAge = calculateBirthDate(userBirthDate);

    document.getElementById("ageShow").innerHTML = calculatedUserAge.years + " Years " + "<br>" + calculatedUserAge.months + "  Months " + "<br>" + calculatedUserAge.days + " Days";
}

)

