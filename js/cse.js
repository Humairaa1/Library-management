let isShowAll = false;
const loadCseBooks = (status) => {
  fetch('json/cse.json')
    .then(res => res.json())
    .then(data => {
      if (status) {
        displayCseBooks(data)
      }
      else {

        displayCseBooks(data.slice(0, 4))
      }
    })
}
const displayCseBooks = (books) => {
  const cseBooksContainer = document.getElementById("cse-book-container");
  cseBooksContainer.innerHTML = "";
  books.forEach(book => {
    const { image, title, author, quantity } = book;
    const div = document.createElement('div');
    div.innerHTML =
      `
       <div class="card bg-base-100 shadow-xl h-[500px]">
  <figure class="px-10 pt-10">
    <img
      src=${image}
      alt="Shoes"
      class="w-[240px] h-[270px] rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${title}</h2>
    <p>${author}</p>
    <div class="card-actions">
      <button class="btn bg-[#3D8D7A] text-white">Details</button>
      <button class="btn bg-[#3D8D7A] text-white">Available (${quantity})</button>
    </div>
  </div>
</div>
       `
    cseBooksContainer.append(div)
  });
}

const showAllBookCse = () => {
  isShowAll = !isShowAll;
  loadCseBooks(isShowAll);

  const button = document.getElementById('toggleButton');
  button.innerText = isShowAll ? "Show Less" : "Show All..."
}
// document.addEventListener('DOMContentLoaded',()=>{
//   loadCseBooks(false)
// })

loadCseBooks(false);