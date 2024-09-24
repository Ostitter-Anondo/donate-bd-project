document.getElementById("pay-hst").addEventListener('click', function(){
  allHider("main-part", "dono-hst-box");
  document.getElementById("dono-btn").classList.add("btn-outline");
  document.getElementById("dono-btn").classList.remove("bg-[#b4f461]");
  document.getElementById("pay-hst").classList.remove("btn-outline");
  document.getElementById("pay-hst").classList.add("bg-[#b4f461]");
});
document.getElementById("dono-btn").addEventListener('click', function(){
  allHider("main-part", "dono-cards");
  document.getElementById("pay-hst").classList.add("btn-outline");
  document.getElementById("pay-hst").classList.remove("bg-[#b4f461]");
  document.getElementById("dono-btn").classList.remove("btn-outline");
  document.getElementById("dono-btn").classList.add("bg-[#b4f461]");
});