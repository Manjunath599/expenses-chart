//selecting days bar elements
const mon = document.querySelector(".mon");
const tue = document.querySelector(".tue");
const wed = document.querySelector(".wed");
const thu = document.querySelector(".thu");
const fri = document.querySelector(".fri");
const sat = document.querySelector(".sat");
const sun = document.querySelector(".sun");

//Money tags elements
const monMoney = document.querySelector(".mon-money");
const tueMoney = document.querySelector(".tue-money");
const wedMoney = document.querySelector(".wed-money");
const thuMoney = document.querySelector(".thu-money");
const friMoney = document.querySelector(".fri-money");
const satMoney = document.querySelector(".sat-money");
const sunMoney = document.querySelector(".sun-money");


const main = document.querySelector(".main-container");

main.addEventListener("mouseover", (e) => {

   if (e.target.classList.contains("mon")) {
      mon.style.backgroundColor = "rgb(253, 174, 152)";
      monMoney.style.visibility = "visible";
   }
   else if (e.target.classList.contains("tue")) {
      tue.style.backgroundColor = "rgb(253, 174, 152)";
      tueMoney.style.visibility = "visible";

   }
   else if (e.target.classList.contains("wed")) {
      wed.style.backgroundColor = "rgb(180, 211, 220";
      wedMoney.style.visibility = "visible";
   }
   else if (e.target.classList.contains("thu")) {
      thu.style.backgroundColor = "rgb(253, 174, 152)";
      thuMoney.style.visibility = "visible";
   }
   else if (e.target.classList.contains("fri")) {
      fri.style.backgroundColor = "rgb(253, 174, 152)";
      friMoney.style.visibility = "visible";
   }
   else if (e.target.classList.contains("sat")) {
      sat.style.backgroundColor = "rgb(253, 174, 152)";
      satMoney.style.visibility = "visible";
   }
   else if (e.target.classList.contains("sun")) {
      sun.style.backgroundColor = "rgb(253, 174, 152)";
      sunMoney.style.visibility = "visible";
   }
});

mon.addEventListener("mouseleave", () => {
   mon.style.backgroundColor = "hsl(10, 79%, 65%)";
   monMoney.style.visibility = "hidden";
});

tue.addEventListener("mouseleave", () => {
   tue.style.backgroundColor = "hsl(10, 79%, 65%)";
   tueMoney.style.visibility = "hidden";
});

wed.addEventListener("mouseleave", () => {
   wed.style.backgroundColor = "hsl(186, 34%, 60%)";
   wedMoney.style.visibility = "hidden";
});

thu.addEventListener("mouseleave", () => {
   thu.style.backgroundColor = "hsl(10, 79%, 65%)";
   thuMoney.style.visibility = "hidden";
});

fri.addEventListener("mouseleave", () => {
   fri.style.backgroundColor = "hsl(10, 79%, 65%)";
   friMoney.style.visibility = "hidden";
});

sat.addEventListener("mouseleave", () => {
   sat.style.backgroundColor = "hsl(10, 79%, 65%)";
   satMoney.style.visibility = "hidden";
});

sun.addEventListener("mouseleave", () => {
   sun.style.backgroundColor = "hsl(10, 79%, 65%)";
   sunMoney.style.visibility = "hidden";
});
