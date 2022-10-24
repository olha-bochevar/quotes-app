const formSearch = document.querySelector('form');
const quoteCardContainer = document.querySelector('.quote-container');
const quoteCard = document.querySelector('.card');

const updateUI = data =>{

    const {author, quote, category} = data;

    
    quoteCard.innerHTML = `
    <div class="card quote-card rounded shadow-lg my-5">
            <div class="card-header category-name-result">
              For category ${category}
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0 blockquote-body">
                <p>${quote}</p>
                <footer class="blockquote-footer author">${author}</footer>
              </blockquote>
            </div>
          </div>
    `;

    if(quoteCardContainer.classList.contains('d-none')){
        quoteCardContainer.classList.remove('d-none');
    }
}

formSearch.addEventListener('submit', e => {
    e.preventDefault();

    const category = formSearch.category.value;
    formSearch.reset();
    getQuote(category)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});
