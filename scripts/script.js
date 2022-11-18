const planSwitch = document.querySelector(".pricing-switch");
const basicPrice = document.querySelector(".basic-price");
const proPrice = document.querySelector(".pro-price");
const businessPrice = document.querySelector(".business-price");
const planDuration = document.querySelectorAll(".plan-duration");

planSwitch.addEventListener("change", () => {
  if (planSwitch.checked) {
    basicPrice.innerText = "Rp 165.000";
    proPrice.innerText = "Rp 495.000";
    businessPrice.innerText = "Rp 1.650.000";
    planDuration.forEach((p) => {
      p.innerText = "/year";
    });
  }else {
    basicPrice.innerText = "Rp 15.000";
    proPrice.innerText = "Rp 45.000";
    businessPrice.innerText = "Rp 150.000";
    planDuration.forEach((p) => {
      p.innerText = "/month";
    });
  }
});
