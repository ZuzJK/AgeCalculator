const button = document.querySelector("button");
const paragraphAge = document.querySelector("#yourAge");
const dateNow = new Date();
const year = dateNow.getFullYear();
const month = dateNow.getMonth()+1;
const day = dateNow.getDate();


const countYears=()=>{
	let date = document.querySelector("input[type=date]");
	let userDate = new Date(date.value);
	let userBdayYear = userDate.getFullYear();
  	let userBdayMonth = userDate.getMonth()+1;
    	let userBdayDay = userDate.getDate();
       let userAge = undefined;

      if(userBdayMonth < month ||( userBdayMonth == month && userBdayDay >= day)){

    		 userAge = year-userBdayYear;
      
      }else{

         userAge = year-userBdayYear-1;

      }
            paragraphAge.textContent = `You are ${userAge } years old`;


}


button.addEventListener("click",countYears);
