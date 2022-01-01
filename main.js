// let post = fetch("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=8d922c31&app_key=af905ade37b309ff4539c4999530672a")
//    let postArr = JSON.parse(post)
//    let recipe_search = document.querySelector('.recipe_search')
// let postHTML = ``

// for (let i = 0; i < postArr.length; i++) {
//     postHTML += `
//     <div class="recipe_search">
//         <h2 class="recipe_name">${postArr[i].label}</h2>
//         <a
//           href="http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html"
//           class="recipt_link"
//           >recipe</a>

//         <ul class="ingredients_recipe_list">
//           <li class="ingredients_recipe">ingredientLines</li>
//         </ul>
//         <span class="calories">calories</span>
//       </div>
//     `

// }

// .then (res => res.json())
//    .then(data => document.querySelector('.recipe_search').innerHTML = JSON.stringify(data))

// async function getResponse() {
//     let response = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=8d922c31&app_key=af905ade37b309ff4539c4999530672a")
//     let content  = await response.json()

// }

// fetch(
//   "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=8d922c31&app_key=af905ade37b309ff4539c4999530672a"
// )
//   .then((res) => res.json())
//   .then((data) => recip(data));

// function recip({ label, url, ingredientLines, calories }) {
//   document.body.insertAdjacentHTML(
//     "afterbegin",
//     `
//     <h1>${label}</h1>
//     <a
//     href= ${url}

//     >recipe</a>
// `
//   );
// }

// function recipe_search(hits) {
//     return hits.map(
//         (recipe) => `
//     <h2>${hits.label}</h2>
//     `
//     );
// }

fetch(
  "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=8d922c31&app_key=af905ade37b309ff4539c4999530672a"
)
  .then(function (resp) {return resp.json() })
  .then(function (data) {
    console.log(data);
    document.querySelector('.recipe_name').innerHTML = data.hits[0].recipe.label;

  });
