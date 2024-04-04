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
        if (searchInput === "") {
            servicesEl.innerHTML = originalServicesContent;
        }
        else{
            let matchingServices = [];
                if (searchInput ===  "dry clean" || "dry clean".includes(searchInput)) {
                    matchingServices.push(dryCleanEl.innerHTML);
                }
                if (searchInput === "laundry" || "laundry".includes(searchInput)) {
                    matchingServices.push(laundryContainer.innerHTML);
                }
                if (searchInput === "upholstery" || "upholstery".includes(searchInput)) {
                    matchingServices.push(upholsteryEl.innerHTML);
                }
                if (searchInput === "steam ironing" || "steam ironing".includes(searchInput)) {
                    matchingServices.push(steamIroningEl.innerHTML);
                }
                if (searchInput === "home cleaning" || "home cleaning".includes(searchInput)) {
                    matchingServices.push(homeCleaningEl.innerHTML);
                }
                if (searchInput === "product store" || "product store".includes(searchInput)) {
                    matchingServices.push(productStoreEl.innerHTML);
                }
                
                if (matchingServices.length > 0) {
                    servicesEl.innerHTML = matchingServices.join("");
                } else {
                    servicesEl.innerHTML = "No search result found!";
                }
        }
    }
    else{
        let searchInput = searchEl.value.trim().toLowerCase(); 

        if (searchInput === "") {
            servicesEl.innerHTML = originalServicesContent;
        }
        else{
            let matchingServices = [];
                if (searchInput ===  "dry clean" || "dry clean".includes(searchInput)) {
                    matchingServices.push(dryCleanEl.innerHTML);
                }
                if (searchInput === "laundry" || "laundry".includes(searchInput)) {
                    matchingServices.push(laundryContainer.innerHTML);
                }
                if (searchInput === "upholstery" || "upholstery".includes(searchInput)) {
                    matchingServices.push(upholsteryEl.innerHTML);
                }
                if (searchInput === "steam ironing" || "steam ironing".includes(searchInput)) {
                    matchingServices.push(steamIroningEl.innerHTML);
                }
                if (searchInput === "home cleaning" || "home cleaning".includes(searchInput)) {
                    matchingServices.push(homeCleaningEl.innerHTML);
                }
                if (searchInput === "product store" || "product store".includes(searchInput)) {
                    matchingServices.push(productStoreEl.innerHTML);
                }
                
                if (matchingServices.length > 0) {
                    servicesEl.innerHTML = matchingServices.join("");
                } else {
                    servicesEl.innerHTML = "No search result found!";
                }
        }
    }
    
}

searchEl.addEventListener("keydown", searchServices);
searchEl.addEventListener("click",searchServices);

});
