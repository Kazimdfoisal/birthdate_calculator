import { threeInputs } from "./array.js";
import { inBirthData } from "./functions.js";
import { age} from "./document.js";


window.addEventListener("load",()=>{
    for (const data of threeInputs) {
        dataEntry.innerHTML+=inBirthData(data);
    }
    document.getElementById("ageShow").innerHTML="_" + " Years "+"<br>"+ "_" + " Months " +"<br>"+ "_" + " Days";
})


 age.addEventListener("click", ()=> 
 {
    var getDayValue = Number(document.getElementById("days").value);
    var getMonthValue = Number(document.getElementById("months").value);
    var getYearValue = Number(document.getElementById("years").value);
    var msg = document.getElementById("msg");

    var date = new Date();
    var currDay = date.getDate();
    var currMonth = 1 + date.getMonth();
    var currYear = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (getDayValue > currDay) {
        currDay = currDay + month[currMonth - 1];
        currMonth = currMonth - 1;
    }
    if (getMonthValue > currMonth) {
        currMonth = currMonth + 12;
        currYear = currYear - 1;
    }
    var days = currDay - getDayValue;
    var months = currMonth - getMonthValue;
    var years = currYear - getYearValue;

    if (getDayValue==""||getMonthValue==""||getYearValue=="") {
        return null;
    }
    else if (getDayValue>="32" || getDayValue<="0") {
        msg.innerText = "Days (1-31)";

    }
    else if (getMonthValue>="13" || getMonthValue <="0") {
        msg.innerText = "Months 1-12";

    }
    else if (getYearValue>="3001"|| getYearValue<="1899") {
        msg.innerText = "Years 1900-3000";
    }
    else{
        msg.innerText="";
        document.getElementById("ageShow").innerHTML = years + " Years "+"<br>"+ months + "  Months " +"<br>"+ days + " Days";
    }

}
    
 ) 
 


