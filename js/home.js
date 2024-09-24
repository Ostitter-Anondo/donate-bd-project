document.getElementById("to-blog").addEventListener('click', function(){
  window.location.href = 'blog.html'
});

document.getElementById("pay-hst").addEventListener('click', function(){
  allHider("main-part", "dono-hst-box");
  document.getElementById("dono-btn").classList.add("btn-outline");
  document.getElementById("dono-btn").classList.remove("bg-[#b4f461]", "border-none");
  document.getElementById("pay-hst").classList.remove("btn-outline");
  document.getElementById("pay-hst").classList.add("bg-[#b4f461]", "border-none");
});
document.getElementById("dono-btn").addEventListener('click', function(){
  allHider("main-part", "dono-cards");
  document.getElementById("pay-hst").classList.add("btn-outline");
  document.getElementById("pay-hst").classList.remove("bg-[#b4f461]", "border-none");
  document.getElementById("dono-btn").classList.remove("btn-outline");
  document.getElementById("dono-btn").classList.add("bg-[#b4f461]", "border-none");
});

document.getElementById("btn-noakhali").addEventListener('click', function(event){
  event.preventDefault();
  const toAdd = Number(document.getElementById("amnt-noakhali").value);
  console.log(toAdd);
  let balance = Number(document.getElementById("balance").innerText);
  let total = Number(document.getElementById("noakhali-total").innerText);
  if (isNaN(toAdd) || toAdd <= 0 || toAdd > Number(balance)){
    document.getElementById("failure-modal").showModal();
    return false;
  }
  document.getElementById("balance").textContent = `${balance - toAdd}`;
  document.getElementById("noakhali-total").textContent = `${total + toAdd}`;
  trxMaker("Flood Relief at Noakhali, Bangladesh", toAdd);
  document.getElementById("success-modal").showModal();
  return true;
});
document.getElementById("btn-feni").addEventListener('click', function(event){
  event.preventDefault();
  const toAdd = Number(document.getElementById("amnt-feni").value);
  let balance = Number(document.getElementById("balance").innerText);
  let total = Number(document.getElementById("feni-total").innerText);
  if (isNaN(toAdd) || toAdd <= 0 || toAdd > Number(balance)){
    document.getElementById("failure-modal").showModal();
    return false;
  }
  document.getElementById("balance").textContent = `${balance - toAdd}`;
  document.getElementById("feni-total").textContent = `${total + toAdd}`;
  trxMaker("Flood Relief at Feni, Bangladesh", toAdd);
  document.getElementById("success-modal").showModal();
  return true;
});
document.getElementById("btn-quota").addEventListener('click', function(event){
  event.preventDefault();
  const toAdd = Number(document.getElementById("amnt-quota").value);
  let balance = Number(document.getElementById("balance").innerText);
  let total = Number(document.getElementById("quota-total").innerText);
  if (isNaN(toAdd) || toAdd <= 0 || toAdd > Number(balance)){
    document.getElementById("failure-modal").showModal();
    return false;
  }
  document.getElementById("balance").textContent = `${balance - toAdd}`;
  document.getElementById("quota-total").textContent = `${total + toAdd}`;
  trxMaker("Aid for Injured in the Quota Movement, Bangladesh", toAdd);
  document.getElementById("success-modal").showModal();
  return true;
});