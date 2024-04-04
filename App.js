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

    function searchServices(event) {
        if (event.key === "Enter" || event.type === "click") {
            let searchInput = searchEl.value.trim().toLowerCase();
            let matchingServices = [];

            if (searchInput === "") {
                servicesEl.innerHTML = originalServicesContent;
                return;
            }

            if (searchInput.length === 1) {
                
                if ("dry clean".toLowerCase().startsWith(searchInput)) {
                    matchingServices.push(dryCleanEl.innerHTML);
                }
                if ("laundry".toLowerCase().startsWith(searchInput)) {
                    matchingServices.push(laundryContainer.innerHTML);
                }
                if ("upholstery".toLowerCase().startsWith(searchInput)) {
                    matchingServices.push(upholsteryEl.innerHTML);
                }
                if ("steam ironing".toLowerCase().startsWith(searchInput)) {
                    matchingServices.push(steamIroningEl.innerHTML);
                }
                if ("home cleaning".toLowerCase().startsWith(searchInput)) {
                    matchingServices.push(homeCleaningEl.innerHTML);
                }
                if ("product store".toLowerCase().startsWith(searchInput)) {
                    matchingServices.push(productStoreEl.innerHTML);
                }
            }

            if (matchingServices.length > 0) {
                servicesEl.innerHTML = matchingServices.join("");
            } else {
                servicesEl.innerHTML = "No search result found!";
            }
        }
    }

    searchEl.addEventListener("keydown", searchServices);
    searchBtn.addEventListener("click", searchServices);
});
