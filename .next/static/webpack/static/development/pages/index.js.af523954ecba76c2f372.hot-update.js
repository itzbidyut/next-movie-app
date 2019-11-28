webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./Data/MovieData.js":
/*!***************************!*\
  !*** ./Data/MovieData.js ***!
  \***************************/
/*! exports provided: MOVIE_DATA, getMoviesData, getMoviesById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVIE_DATA", function() { return MOVIE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMoviesData", function() { return getMoviesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMoviesById", function() { return getMoviesById; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


/* import { resolve } from "dns"
  */
var MOVIE_DATA = [{
  id: '1',
  name: 'The Shawshank Redemption',
  releaseYear: 1994,
  description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  rating: 4.8,
  genre: 'drama',
  image: 'https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg'
}, {
  id: '2',
  name: 'The Dark Knight',
  releaseYear: 2008,
  description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
  rating: 4.7,
  genre: 'action, crime, drama',
  image: 'https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600'
}, {
  id: '3',
  name: 'Lord of the Rings',
  releaseYear: 2004,
  description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
  rating: 4.9,
  genre: 'adventure, drama, fantasy',
  image: 'https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600'
}];
var getMoviesData = function getMoviesData() {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
    setTimeout(function () {
      resolve(MOVIE_DATA);
      reject('cannot fetch data');
    }, 500);
  });
};
var getMoviesById = function getMoviesById(id) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
    var movieIndex = MOVIE_DATA.findIndex(function (m) {
      return m.id === id;
    });
    var movie = MOVIE_DATA[movieIndex];
    /*  console.log(movie) */

    setTimeout(function () {
      return resolve(movie);
    }, 50);
  });
};

/***/ })

})
//# sourceMappingURL=index.js.af523954ecba76c2f372.hot-update.js.map