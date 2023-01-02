console.log("Category Script is Working");


async function categoryItems() {
    let response = await fetch('https://dummyjson.com/products/categories');
    let categories = await response.json();
    let resultCategoryList = categories;

    // console.log(resultCategoryList);

    resultCategoryList.map((value) => {
        // console.log(value);

        let list =
            `<button type="button" class="list-group-item list-group-item-action rounded-0 fw-bold " onclick="searchByCategory()">
         ${value}
        </button>`
        $('#showCat').append(list);
    });

}
categoryItems();


// function searchByCategory(value) {
//     // alert("Working");
//     fetch(`https://dummyjson.com/products/category/${value}`)
//     .then(res => res.json())
//     .then(console.log);
// }