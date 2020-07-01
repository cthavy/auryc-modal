/**
 * changing categories of feedback
 */
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

/**
 * select state for ratings
 */
const ratings = document.getElementsByClassName("rating");
function rate(self) {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
    if (i === parseInt(self.dataset.val)) {
      self.classList.add('active');
    }
  }
}

/**
 * keeping track of character count within text areas
 */
const ta_feed = document.getElementById("ta-feed");
const ta_loc = document.getElementById("ta-loc");
const ta_gen = document.getElementsByClassName("ta-gen");

const c_feed = document.getElementById("feed-counter");
const c_loc = document.getElementById("loc-counter");
const c_gen = document.getElementsByClassName("gen-counter");

ta_feed.addEventListener("input", countChars.bind(this, ta_feed, c_feed));
ta_loc.addEventListener("input", countChars.bind(this, ta_loc, c_loc));
for (let i = 0; i < ta_gen.length; i++) {
  ta_gen[i].addEventListener('input', countChars.bind(this, ta_gen[i], c_gen[i]));
}

function countChars(self, counter) {
  const MAXLENGTH = 1000;
  let currentLength = self.value.length;

  counter.innerHTML = MAXLENGTH - currentLength + " characters left";
}