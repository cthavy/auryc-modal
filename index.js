const x = document.getElementById("categories");
const website = document.getElementById("website");
const products = document.getElementById("products");
const locations = document.getElementById("locations");
const general = document.getElementById("general");
const all = document.getElementsByClassName("expand");

function changeCategory() {
  // remove all current active
  for (let i = 0; i < all.length; i++) {
    all[i].classList.remove('active');
  }

  switch(x.value) {
    case 'website':
      website.classList.add('active');
      break;
    case 'products':
      products.classList.add('active');
      break;
    case 'locations':
      locations.classList.add('active');
      break;
    case 'general':
      general.classList.add('active');
      break;
    default:
      break;
  } 
}