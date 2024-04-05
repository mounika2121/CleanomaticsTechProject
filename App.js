document.addEventListener("DOMContentLoaded", function() {
    let servicesEl = document.getElementById("types-of-services");
    let searchEl = document.getElementById("search-element");
    let laundryContainer = document.getElementById("laundry");
    let searchBtn = document.getElementById("search-btn");
    let dryCleanEl = document.getElementById("dryClean");
    let upholsteryEl = document.getElementById("upholstery");
    let steamIroningEl = document.getElementById("steamIroning");
    let homeCleaningEl = document.getElementById("homeCleaning");
    let productStoreEl = document.getElementById("productStore");
    let originalServicesContent = servicesEl.innerHTML;

    // console.log("Script loaded");

    function searchServices(event) {
        console.log("Search function called");
        if (event.key === "Enter" || event.type === "click" || event.type === "input") {
            let searchInput = searchEl.value.trim().toLowerCase();
            let matchingServices = [];

            if (searchInput === "") {
                servicesEl.innerHTML = originalServicesContent;
                return;
            }

            let servicesToCheck = [
                { name: "dry clean", element: dryCleanEl },
                { name: "laundry", element: laundryContainer },
                { name: "upholstery", element: upholsteryEl },
                { name: "steam ironing", element: steamIroningEl },
                { name: "home cleaning", element: homeCleaningEl },
                { name: "product store", element: productStoreEl }
            ];

            servicesToCheck.forEach(service => {
                if (service.name.toLowerCase().startsWith(searchInput)  && service.name.toLowerCase().includes(searchInput)) {
                    matchingServices.push(service.element.innerHTML);
                }
            });

            if (matchingServices.length > 0) {
                servicesEl.innerHTML = matchingServices.join("");
            } else {
                servicesEl.innerHTML = "No search result found!";
            }
        }
    }

    searchEl.addEventListener("keydown", searchServices);
    searchBtn.addEventListener("click", searchServices);
    searchEl.addEventListener("input", searchServices);
});
