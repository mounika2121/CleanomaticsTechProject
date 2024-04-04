document.addEventListener("DOMContentLoaded", function() {
    let servicesEl = document.getElementById("types-of-services");
    let searchEl = document.getElementById("serach-element");
    let laundryContainer = document.getElementById("laundry");
    let searchBtn = document.getElementById("search-btn");
    let dryCleanEl = document.getElementById("dryClean");
    let originalServicesContent = servicesEl.innerHTML;

function searchServices(event){
    if(event.key === "Enter"){
        let searchInput = searchEl.value.trim().toLowerCase(); 
        if(searchInput === "laundry"){
            servicesEl.innerHTML = laundryContainer.innerHTML;
        }
        else if (searchInput ===  "dry clean"){
            servicesEl.innerHTML = dryCleanEl.innerHTML;
        }
        else if (searchInput === "") {
            servicesEl.innerHTML = originalServicesContent;
        }
        else {
            servicesEl.innerHTML = "No search result found!"; 
        }
    }
    else{
        let searchInput = searchEl.value.trim().toLowerCase(); 
        if(searchInput === "laundry"){
            servicesEl.innerHTML = laundryContainer.innerHTML;
        }
        else if (searchInput ===  "dry clean"){
            servicesEl.innerHTML = dryCleanEl.innerHTML;
        }
        else if (searchInput === "") {
            servicesEl.innerHTML = originalServicesContent;
        }
        else {
            servicesEl.innerHTML = "No search result found!"; 
        }
    }
    
}

searchEl.addEventListener("keydown", searchServices);
searchBtn.addEventListener("click",searchServices);
});
