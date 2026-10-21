const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

const dayOtp = document.getElementById("DD");
const monthOtp = document.getElementById("MM");
const yearOtp = document.getElementById("YY");

const form = document.querySelector("form");


    
form.addEventListener("submit", handleSubmit);



const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate(){
    const inputs = document.querySelectorAll("input");
    let validator = true;

    const date = new Date();
    const year = date.getFullYear();
    inputs.forEach((i)=>{
        const parent = i.parentElement;
        if(!i.value){
            i.style.borderColor = "red";
            parent.querySelector("small").innerText = "this field is required";
            validator = false;
        }else if(monthInp.value > 12 || monthInp.value < 1 ){
            monthInp.style.borderColor = "red";
            monthInp.parentElement.querySelector("small").innerText = "Must be a valid month";
            validator = false;            
        }else if(dayInp.value > 31 || dayInp.value < 1){
            dayInp.style.borderColor = "red";
            dayInp.parentElement.querySelector("small").innerText = "Must be a valid day";
            validator = false;   
        }else if(yearInp.value > year ){
            yearInp.style.borderColor = "red";
            yearInp.parentElement.querySelector("small").innerText = "Must be a date in the past";
            validator = false;   
        }else{
            i.style.borderColor = "black";
            parent.querySelector("small").innerText = "";
            validator = true;
        }
    })
    return validator;
}

function handleSubmit(e){
    e.preventDefault();
    
    if(validate()){
        const date = new Date();
        let day = date.getDate();
        let month = 1 + date.getMonth();
        let year = date.getFullYear();
        if(dayInp.value > day){
            let pastMonth = month - 2;
            if(pastMonth < 0){
                pastMonth = 11
            }
            day = day + months[pastMonth];
            month = month - 1 ;
        }
        if(monthInp.value > month){
            month = month + 12 ;
            year = year - 1;
        }
        const d = day - dayInp.value;
        const m = month - monthInp.value;
        const y = year - yearInp.value;

        dayOtp.innerHTML = d;
        monthOtp.innerHTML = m;
        yearOtp.innerHTML = y;


    }
}