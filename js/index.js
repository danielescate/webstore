const products = [
    {
      album: `Alvvays`,
      artist: `Alvvays`,
      year: 2014,
      price: `$20`,
      salePrice: `$22`,
      img: `img/alvvays-vinyl.jpg`,
      rating: `<dd>4.5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>`,
      genre: null
    }, {
      album: `Suck it and See`,
      artist: `Arctic Monkeys`,
      year: 2011,
      price: `$25`,
      salePrice: `$28`,
      img: `img/suck-it-and-see-vinyl.jpg`,
      rating: `<dd>4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span></dd>`,
      genre: null
    }, {
      album: `Uncle, Duke, & The Chief`,
      artist: `Born Ruffians`,
      year: 2018,
      price: `$20`,
      salePrice: `$24`,
      img: `img/uncle-duke-and-the-chief-vinyl.jpg`,
      rating: `<dd>4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span></dd>`,
      genre: null
    }, {
      album: `Fantasies`,
      artist: `Metric`,
      year: 2009,
      price: `$22`,
      salePrice: `$26`,
      img: `img/fantasies-vinyl.jpg`,
      rating: `<dd>3.5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>`,
      genre: null
    }, {
      album: `Currents`,
      artist: `Tame Impala`,
      year: 2015,
      price: `$30`,
      salePrice: `$33`,
      img: `img/currents-vinyl.jpg`,
      rating: `<dd>5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span></dd>`,
      genre: null
    }, {
      album: `Forcefield`,
      artist: `Tokyo Police Club`,
      year: 2014,
      price: `$25`,
      salePrice: `$28`,
      img: `img/forcefield-vinyl.jpg`,
      rating: `<dd>3.5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>`,
      genre: null
    }, {
      album: `Ruff`,
      artist: `Born Ruffians`,
      year: 2016,
      price: `$20`,
      salePrice: `$24`,
      img: `img/ruff-vinyl.jpg`,
      rating: `<dd>3.5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>`,
      genre: null
    }, {
      album: `The Suburbs`,
      artist: `Arcade Fire`,
      year: 2011,
      price: `$35`,
      salePrice: `$40`,
      img: `img/the-suburbs-vinyl.jpg`,
      rating: `<dd>5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span></dd>`,
      genre: null
    }, {
      album: `Antisocialites`,
      artist: `Alvvays`,
      year: 2017,
      price: `$22`,
      salePrice: `$25`,
      img: `img/antisocialites-vinyl.jpg`,
      rating: `<dd>3.5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>`,
      genre: null
    }, {
      album: `Reflektor`,
      artist: `Arcade Fire`,
      year: 2015,
      price: `$35`,
      salePrice: `$40`,
      img: `img/reflektor-vinyl.jpg`,
      rating: `<dd>4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span></dd>`,
      genre: null
    },   
]

function getProductsAsHtmlString(products) {
    return `<article class="product">
    <header>
      <img src="${products.img}" alt="${products.album}">
    </header>
    <h3>${products.artist} - ${products.album}</h3>
    <p>${products.year}</p>
    <form>
        <fieldset>
            <legend>Format:</legend>
                <ul>
                  <li><label><input type="radio" name="format" value="vinyl"> <span>Vinyl</span></label></li>
                  <li><label><input type="radio" name="format" value="CD"> <span>CD</span></label></li>
                  <li><label><input type="radio" name="format" value="MP3"> <span>MP3</span></label></li>
                </ul>
        </fieldset>

        <footer>
            <dl>
              <dt>Rating</dt>
              <dd>${products.rating}</dd>
            </dl>
            <data value="39"><del>${products.salePrice}</del> <ins>${products.price}</ins></data>
            <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
            <button type="button"><span class="material-icons">favorite</span></button>
            <a href="#">see more</a>
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

//<dd>4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>


function navButton() {
  var nav = document.getElementById("links");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

function searchButton() {
    var nav = document.getElementById("search");
    if (nav.style.display === "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  }

  function filterButton() {
    var nav = document.getElementById("category");
    if (nav.style.display === "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  }
