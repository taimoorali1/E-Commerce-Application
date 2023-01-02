console.log("Search Script is Working");


function searchData() {

  var selectedSearch = document.getElementById('searchText').value;
  console.log(selectedSearch);

  async function data(selectedSearch) {
    alert("Getting the val=" + selectedSearch);
    // let response = await fetch('https://dummyjson.com/products/search?q='+selectedSearch);
    let response = await fetch('https://dummyjson.com/products/category/' + selectedSearch)
    let user = await response.json();
    let resultProductList = user.products;

    console.log(resultProductList);

    resultProductList.map((val, index) => {
      console.log(val.category);


      if (selectedSearch == val.category) {
        console.log("Hello");
        let showProduct =
          `<div class="col-lg-4">
             <div class="product_info my-3 text-center">
                <div class="card">
                    <img src="${val.thumbnail}" class="img-fluid">
                    <h6 class="my2">${val.title}</h6>
                    <h6>${val.brand}</h6>
                    <p class="mb-1">${val.description}</p>
                    <p class="mb-1 fw-bold">Category:${val.category}</p>
                    <span class="fw-semibold">Rs.${val.price}<small>(${val.discountPercentage}%)</small></span>
                
                    <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#exampleModal_${index}">
                Show Details
                </button>
    
                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal_${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">Product Detail</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <img src="${val.thumbnail}" class="img-fluid">
                        <h6 class="my2">${val.title}</h6>
                        <h6>${val.brand}</h6>
                        <p>${val.description}</p>
                        <p class="mb-1 fw-bold">Category:${val.category}</p>
                        <span class="mb-1 fw-bold">${val.price}<small>(${val.discountPercentage}%)</small></span>
                        <p class="mb-1">${val.rating}</p>
                        <p>Stock ${val.stock}</p>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
           </div>`

        $('#showProduct').append(showProduct);

      }
      else {
        alert("No Data Found")
      }
    })
  }
  data(selectedSearch);
}