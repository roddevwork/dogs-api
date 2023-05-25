//* The Dog API has exactly the same API structure as theCatAPI.com, so any documentation can be used - just replace api.thecatapi.com with api.thedogapi.com
//* json
// [
//   {
//   "id": "co3",
//   "url": "https://cdn2.thecatapi.com/images/co3.jpg",
//   "width": 600,
//   "height": 800
//   }
//   ]
// -> Variables
const URL = " https://api.thedogapi.com/v1/images/search"
const btnReload = document.querySelector('button')

// -> Functions
const reloadPage = () => location.reload()

// -> Listeners
btnReload.addEventListener("click", reloadPage)


// -> Async-Await arrow function
const fetchData = async () => {
  const response = await fetch(URL)
  const data = await response.json()
  const img = document.querySelector('img')
  data.forEach(item => img.src = item.url)
}
fetchData()





/* 
// -> Promise
fetch(URL)
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    data.forEach(item => {
      // console.log("id:", item.id);
      // console.log("url:", item.url);
      const img = document.querySelector('img')
      img.src = item.url
    });
  })
 */


/* 
// -> Async-await

async function fetchData() {
  const response = await fetch(URL)
  const data = await response.json()
  const img = document.querySelector('img')
  data.forEach(item => img.src = item.url)
}
fetchData()
 */



