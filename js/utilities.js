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

function trxMaker(location, amount){
  let div = document.createElement("div");
  const rightNow = new Date();
  div.classList.add('w-9/12', 'border', 'border-gray-300', 'rounded-lg', 'my-8', 'p-6');
  div.innerHTML = `
                  <h3 class="text-xl font-bold">
                    ${amount} Taka is Donated for ${location}
                  </h3>
                  <br>
                  <p class="text-lg font-light">
                    ${rightNow.toString()}
                  </p>
  `;
  document.getElementById('trx-hst').appendChild(div);
}