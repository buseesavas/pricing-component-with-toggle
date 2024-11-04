const yillikOdeme = document.querySelector(".yillikOdeme");
const basicPrice = document.querySelector(".basicPrice");
const professionalPrice = document.querySelector(".professionalPrice");
const masterPrice = document.querySelector(".masterPrice");

yillikOdeme.addEventListener("click", hesapla);

basicPrice.innerHTML = `<span>$</span>19.99`;
professionalPrice.innerHTML = "<span>$</span>24.99";
masterPrice.innerHTML = "<span>$</span>39.99";

function hesapla() {
  if (yillikOdeme.checked) {
    basicPrice.innerHTML = "<span>$</span>199.99";
    professionalPrice.innerHTML = "<span>$</span>249.99";
    masterPrice.innerHTML = "<span>$</span>399.99";
  } else {
    basicPrice.innerHTML = "<span>$</span>19.99";
    professionalPrice.innerHTML = "<span>$</span>24.99";
    masterPrice.innerHTML = "<span>$</span>39.99";
  }
}
