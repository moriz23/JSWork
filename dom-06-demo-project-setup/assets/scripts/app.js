const startAddMovieBtn = document.querySelector('#add-movie');
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('#backdrop');
const cancelBtn = document.querySelector('#cancel-btn');
const addBtn = cancelBtn.nextElementSibling;
const userInputs = modal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const listRoot = document.getElementById('movie-list');
const deleteMovieModel = document.getElementById('delete-modal');
let deleteMovieBtn = document.querySelector('#delete-modal .btn--danger');
const deleteMovieCancelBtn = document.querySelector('#delete-modal .btn--passive');

const movies = [];

const updateUi = () => {
  if(movies.length === 0){
    entryTextSection.style.display ="block";
  } else {
    entryTextSection.style.display ="none";
  }
};

const closeMovieDeletionModal = () => {
  toggleBlackdrop();
  deleteMovieModel.classList.remove('visible');
}

const deleteMovie = movieId => {
  let movieIndex = 0;
  for(const movie of movies){
    if(movie.id === movieId){
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  listRoot.children[movieIndex].remove();
  closeMovieDeletionModal();
  updateUi();
};

const deleteMovieHandler = movieId => {
  deleteMovieModel.classList.add('visible');
  toggleBlackdrop();

  //deleteMovieBtn.removeEventListener('click', deleteMovie.bind(null, movieId)); //will not work
  deleteMovieBtn.replaceWith(deleteMovieBtn.cloneNode(true));

  deleteMovieBtn = document.querySelector('#delete-modal .btn--danger');

  deleteMovieCancelBtn.removeEventListener('click', closeMovieDeletionModal);

  deleteMovieBtn.addEventListener('click', deleteMovie.bind(null, movieId));
  deleteMovieCancelBtn.addEventListener('click', closeMovieDeletionModal)
};

const renderNewMovieElement = (id, title, imageUrl, rating) =>  {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt=${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
  listRoot.append(newMovieElement);
};

const toggleBlackdrop = () => {
  backdrop.classList.toggle('visible');
};

const closeMovieModel = () => {
  modal.classList.remove('visible');
};

const showMovieModel = () => {
  modal.classList.add('visible');
  toggleBlackdrop();
};

const clearMovieInput = () => {
  for(const userInput of userInputs){
    userInput.value = '';
  }
};

const backDropClickHandler = () => {
  closeMovieModel();
  closeMovieDeletionModal();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  if(titleValue.trim() === '' || imageValue.trim() === '' || ratingValue.trim() === ''|| +ratingValue < 1 || +ratingValue > 5){
    alert("Please enter valid values (rating between 1 and 5)");
  }

  const newMovies = {
    id: Math.random().toString,
    title: titleValue,
    image: imageValue,
    rating: ratingValue
  };

  movies.push(newMovies);
  console.log(newMovies);
  closeMovieModel();
  toggleBlackdrop();
  clearMovieInput();
  renderNewMovieElement(newMovies.id, titleValue, imageValue, ratingValue);
  updateUi();
};

const cancelMovieModelHandler = () => {
  closeMovieModel();
  toggleBlackdrop();
  clearMovieInput();
};

startAddMovieBtn.addEventListener('click', showMovieModel);

backdrop.addEventListener('click', backDropClickHandler);

addBtn.addEventListener('click', addMovieHandler);

cancelBtn.addEventListener('click', cancelMovieModelHandler);
