const products = [
    {
      album: `Alvvays`,
      artist: `Alvvays`,
      year: 2014,
      price: `$20`,
      salePrice: `$22`,
      img: `img/alvvays-vinyl.jpg`,
      rating: `<dd>4.5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>`,
      genre: "indie",
      sort: "a-e"
    }, {
      album: `Suck it and See`,
      artist: `Arctic Monkeys`,
      year: 2011,
      price: `$25`,
      salePrice: `$28`,
      img: `img/suck-it-and-see-vinyl.jpg`,
      rating: `<dd>4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span></dd>`,
      genre: "alternative",
      sort: "a-e"
    }, {
      album: `Uncle, Duke, & The Chief`,
      artist: `Born Ruffians`,
      year: 2018,
      price: `$20`,
      salePrice: `$24`,
      img: `img/uncle-duke-and-the-chief-vinyl.jpg`,
      rating: `<dd>4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span></dd>`,
      genre: "indie",
      sort: "a-e"
    }, {
      album: `Fantasies`,
      artist: `Metric`,
      year: 2009,
      price: `$22`,
      salePrice: `$26`,
      img: `img/fantasies-vinyl.jpg`,
      rating: `<dd>3.5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>`,
      genre: "alternative",
      sort: "l-r"
    }, {
      album: `Currents`,
      artist: `Tame Impala`,
      year: 2015,
      price: `$30`,
      salePrice: `$33`,
      img: `img/currents-vinyl.jpg`,
      rating: `<dd>5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span></dd>`,
      genre: "alternative",
      sort: "s-z"
    }, {
      album: `Forcefield`,
      artist: `Tokyo Police Club`,
      year: 2014,
      price: `$25`,
      salePrice: `$28`,
      img: `img/forcefield-vinyl.jpg`,
      rating: `<dd>3.5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>`,
      genre: "alternative",
      sort: "s-z"
    }, {
      album: `Ruff`,
      artist: `Born Ruffians`,
      year: 2016,
      price: `$20`,
      salePrice: `$24`,
      img: `img/ruff-vinyl.jpg`,
      rating: `<dd>3.5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>`,
      genre: "indie",
      sort: "a-e"
    }, {
      album: `The Suburbs`,
      artist: `Arcade Fire`,
      year: 2011,
      price: `$35`,
      salePrice: `$40`,
      img: `img/the-suburbs-vinyl.jpg`,
      rating: `<dd>5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span></dd>`,
      genre: "alternative",
      sort: "a-e"
    }, {
      album: `Antisocialites`,
      artist: `Alvvays`,
      year: 2017,
      price: `$22`,
      salePrice: `$25`,
      img: `img/antisocialites-vinyl.jpg`,
      rating: `<dd>3.5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>`,
      genre: "indie",
      sort: "a-e"
    }, {
      album: `Reflektor`,
      artist: `Arcade Fire`,
      year: 2015,
      price: `$35`,
      salePrice: `$40`,
      img: `img/reflektor-vinyl.jpg`,
      rating: `<dd>4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span></dd>`,
      genre: "alternative",
      sort: "a-e"
    }, {
      album: `Homework`,
      artist: `Daft Punk`,
      year: 1997,
      price: `$20`,
      salePrice: `$22`,
      img: `img/homework-vinyl.jpg`,
      rating: `<dd>4.5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>`,
      genre: "dance",
      sort: "a-e"
    }, {
      album: `Mechanical Bull`,
      artist: `Kings of Leon`,
      year: 2013,
      price: `$22`,
      salePrice: `$26`,
      img: `img/mechanical-bull-vinyl.jpg`,
      rating: `<dd>3.5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>`,
      genre: "rock",
      sort: "f-k"
    }, {
      album: `2001`,
      artist: `Dr. Dre`,
      year: 1999,
      price: `$20`,
      salePrice: `$24`,
      img: `img/2001-vinyl.jpg`,
      rating: `<dd>4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span></dd>`,
      genre: "hip-hop/rap",
      sort: "a-e"
    }, {
      album: `4x4=12`,
      artist: `Deadmau5`,
      year: 2010,
      price: `$25`,
      salePrice: `$28`,
      img: `img/4x4=12-vinyl.jpg`,
      rating: `<dd>4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span></dd>`,
      genre: "dance",
      sort: "a-e"
    }, {
      album: `Back in Black`,
      artist: `AC/DC`,
      year: 1980,
      price: `$30`,
      salePrice: `$33`,
      img: `img/back-in-black-vinyl.jpg`,
      rating: `<dd>5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span></dd>`,
      genre: "rock",
      sort: "a-e"
    }, {
      album: `Neva Left`,
      artist: `Snoop Dogg`,
      year: 2017,
      price: `$25`,
      salePrice: `$28`,
      img: `img/neva-left-vinyl.jpg`,
      rating: `<dd>3.5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>`,
      genre: "hip-hop/rap",
      sort: "s-z"
    }, {
      album: `Rumours`,
      artist: `Fleetwood Mac`,
      year: 1977,
      price: `$20`,
      salePrice: `$24`,
      img: `img/rumours-vinyl.jpg`,
      rating: `<dd>3.5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>`,
      genre: "rock",
      sort: "f-k"
    }, {
      album: `Mi Vida Es Cantar`,
      artist: `Celia Cruz`,
      year: 1998,
      price: `$35`,
      salePrice: `$40`,
      img: `img/mi-vida-vinyl.jpg`,
      rating: `<dd>5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span></dd>`,
      genre: "latin",
      sort: "a-e"
    }, {
      album: `Shrek 2 Soundtrack`,
      artist: `Various Artists`,
      year: 2004,
      price: `$22`,
      salePrice: `$25`,
      img: `img/shrek-vinyl.jpeg`,
      rating: `<dd>3.5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>`,
      genre: "soundtrack",
      sort: "s-z"
    }, {
      album: `Barrio Fino`,
      artist: `Daddy Yankee`,
      year: 2004,
      price: `$35`,
      salePrice: `$40`,
      img: `img/barrio-fino-vinyl.jpg`,
      rating: `<dd>4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span></dd>`,
      genre: "latin",
      sort: "a-e"
  },  
]


function getProductsAsHtmlString(products) {
    return `<article class="product">
    <header>
      <img src="${products.img}" alt="${products.album}">
    </header>
    <h3>${products.artist} - ${products.album} (${products.year})</h3>
    <p></p>
    <form>
        <fieldset>
            <legend>Format:</legend>
                <ul>
                  <li><label><input type="radio" name="format" id="vinyl" onclick="check1()"> <span>Vinyl</span></label></li>
                  <li><label><input type="radio" name="format" id="CD" onclick="check2()"> <span>CD</span></label></li>
                  <li><label><input type="radio" name="format" id="MP3" onclick="check3()"> <span>MP3</span></label></li>
                </ul>
                <p id="in-stock">In Stock</p>
                <p id="out-stock">Out of Stock</p>
                <p id="available">Available</p>
        </fieldset>

        <footer>
            <dl>
              <dt>Rating</dt>
              <dd>${products.rating}</dd>
            </dl>
            <data value="39"><del>${products.salePrice}</del> <ins>${products.price}</ins></data>
            <button class="add" type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
            <button class="add" type="button"><span class="material-icons">favorite</span></button>
         </footer>
    </form>
    </article>`;
}


function renderProducts(arr) {
  const arrOfHtml = arr.map(getProductsAsHtmlString);

  // 2. join() the new array into a single string of HTML
  const stringOfHtml = arrOfHtml.join(`\n`);

  // 3. Put the string into innerHTML of the documents <ul>
  document.getElementById(`products`).innerHTML = stringOfHtml;
}

renderProducts(products)

// Cart
var items = 0;

function addItem() {
  items += 1;
  document.getElementById("itemCount").innerHTML = items;
};


//Format
function check1() {
  var radio = document.getElementById("vinyl");
  var text = document.getElementById("in-stock");
  if (radio.selected == true){
    text.style.display = "none";
  } else {
     text.style.display = "block";
  }
}

function check2() {
  var radio = document.getElementById("CD");
  var text = document.getElementById("out-stock");
  if (radio.selected == true){
    text.style.display = "none";
  } else {
     text.style.display = "block";
  }
}

function check3() {
  var radio = document.getElementById("MP3");
  var text = document.getElementById("available");
  if (radio.selected == true){
    text.style.display = "none";
  } else {
     text.style.display = "block";
  }
}


// Nav hide/show
function navButton() {
  var nav = document.getElementById("links");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

// Search hide/show
function searchButton() {
    var nav = document.getElementById("search");
    if (nav.style.display === "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
}

// Filter dropdown
function filterButton() {
  var nav = document.getElementById("category");
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}

// Pages
function pageButton() {
  products.splice(5,5); 
}

// Search
function checkInput(event) {
  const userIsLookingFor = event.target.value.toLowerCase();
 
  const onlyMatchingNames = products.filter(prod => prod.artist.toLowerCase().includes(userIsLookingFor));
  renderProducts(onlyMatchingNames);
}

document.getElementById('productsAlbum').addEventListener('input', event => checkInput(event) )

// Sort: genre
function checkCategory(event) {
  const userIsLookingFor = event.target.value;

  const onlyMatchingCategories = products.filter(prod => prod.genre == userIsLookingFor);
  renderProducts(onlyMatchingCategories);
}

document.getElementById('productsGenre').addEventListener('change', event => checkCategory(event) )

// Sort: artists
function checkFormat(event) {
  const userIsLookingFor = event.target.value;

  const onlyMatchingFormat = products.filter(prod => prod.sort == userIsLookingFor);
  renderProducts(onlyMatchingFormat);
}

document.getElementById('productsSort').addEventListener('change', event => checkFormat(event) )

