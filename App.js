document.addEventListener("DOMContentLoaded", function() {
    let servicesEl = document.getElementById("types-of-services");
    let searchEl = document.getElementById("serach-element");
    let laundryContainer = document.getElementById("laundry");
    let searchBtn = document.getElementById("search-btn");
    let dryCleanEl = document.getElementById("dryClean");
    let upholsteryEl = document.getElementById("upholstery");
    let steamIroningEl = document.getElementById("steamIroning");
    let homeCleaningEl = document.getElementById("homeCleaning");
    let productStoreEl = document.getElementById("productStore");
    let originalServicesContent = servicesEl.innerHTML;

function searchServices(event){
    if(event.key === "Enter"){
        let searchInput = searchEl.value.trim().toLowerCase(); 
        if(searchInput === "") {
            servicesEl.innerHTML = originalServicesContent;
        }
        else if(searchInput === "laundry"){
            servicesEl.innerHTML = laundryContainer.innerHTML;
        }
        else if (searchInput ===  "dry clean"){
            servicesEl.innerHTML = dryCleanEl.innerHTML;
        }
        else if(searchInput === "upholstery"){
            servicesEl.innerHTML = upholsteryEl.innerHTML;
        }
        else if (searchInput === "steam ironing"){
            servicesEl.innerHTML = steamIroningEl.innerHTML;
        }
        else if(searchInput === "home cleaning"){
            servicesEl.innerHTML = homeCleaningEl.innerHTML;
        }
        else if(searchInput === "product store"){
            servicesEl.innerHTML = productStoreEl.innerHTML;
        }
        else {
            servicesEl.innerHTML = "No search result found!"; 
        }
    }
    else{
        let searchInput = searchEl.value.trim().toLowerCase(); 
        if (searchInput === "") {
            servicesEl.innerHTML = originalServicesContent;
        }
        else if (searchInput ===  "dry clean" || "dry clean".includes(searchInput)){
            servicesEl.innerHTML = dryCleanEl.innerHTML;
        }
        else if(searchInput === "laundry" || "laundry".includes(searchInput)){
            servicesEl.innerHTML = laundryContainer.innerHTML;
        }
        else if(searchInput === "upholstery" || "upholstery".includes(searchInput)){
            servicesEl.innerHTML = upholsteryEl.innerHTML;
        }
        else if (searchInput === "steam ironing" || "steam ironing".includes(searchInput)){
            servicesEl.innerHTML = steamIroningEl.innerHTML;
        }
        else if(searchInput === "home cleaning" || "home cleaning".includes(searchInput)){
            servicesEl.innerHTML = homeCleaningEl.innerHTML;
        }
        else if(searchInput === "product store" || "product store".includes(searchInput)){
            servicesEl.innerHTML = productStoreEl.innerHTML;
        }
        else {
            servicesEl.innerHTML = "No search result found!"; 
        }
    }
    
}

searchEl.addEventListener("keydown", searchServices);
searchBtn.addEventListener("click",searchServices);
});
