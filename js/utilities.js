function inputValById(inputId){
  return document.getElementById(inputId).value;
}

function allHider(element, toUnhide = null){
  let childrenList = document.getElementById(element).children;
  for (child of childrenList){
    child.classList.add('hidden');
  }
  if (toUnhide !== null){
    let unHide = document.getElementById(toUnhide);
    unHide.classList.remove('hidden');
  }
}


function timeFinder(){
  const monthList = {
    0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr',
    4: 'May', 5: 'Jun', 6: 'Jul', 7: 'Aug',
    8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec',
  };
  const dayList = {
    0: 'Sun', 1: "Mon", 2: "Tue", 3: "Wed", 4:"Thu", 5: "Fri", 6: "Sat"
  };
  const currentdate = new Date();
  const fin = "Date: " + dayList[`${currentdate.getDay()}`] + monthList[`${currentdate.getMonth()}`] + " " +  currentdate.getDate() + " " + currentdate.getFullYear() + " " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds() + " GMT +0600 (Bangladesh Standard Time)";
  return fin;
}

function trxMaker(location, amount){
  let div = document.createElement("div");
  div.classList.add('flex', 'justify-around', 'w-9/12');
  div.innerHTML = `
                  <h3 class="text-xl font-bold">
                    ${amount} Taka is Donated for ${location}
                  </h3>
                  <p class="text-lg font-light">
                    ${timeFinder()}
                  </p>
  `;
  document.getElementById('trx-hst').appendChild(div);
}