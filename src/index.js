import "./style.css";
import * as APIModule from "./modules/API.js";
import * as displayModule from "./modules/display.js";
import * as localStorageModule from "./modules/localStorage.js";

let defaultCity;
if(document.getElementsByClassName("delete-city-btn").length !== 0) defaultCity = document.getElementById("saved-cities").getElementsByTagName("li")[0].textContent;
else defaultCity = "New York";

async function getAndDisplay(city) {
    try {
        let data = await APIModule.fetchData(city);
        await displayModule.showCity(data).changeAll();
    }
    catch(err) {
        document.getElementById("search-error-msg").textContent = "Search unsuccessful for " + city;
    }
};

getAndDisplay(defaultCity);

document.getElementById("exit-btn").addEventListener("click", () => document.getElementById("other-cities").style.display = "none");
document.getElementById("search-btn").addEventListener("click", () => document.getElementById("other-cities").style.display = "block");

const editSavedCities = () => {
    let toggleDeleteBtn = () => {
        let deleteBtns = document.getElementsByClassName("delete-city-btn");
        for(let i = 0; i < deleteBtns.length; i++) {
            if(deleteBtns[i].style.display !== "block") deleteBtns[i].style.display = "block";
            else deleteBtns[i].style.display = "none";
        }
    }
    return {toggleDeleteBtn};
};
document.getElementById("edit-saved-cities-btn").onclick = () => editSavedCities().toggleDeleteBtn();

let search = (() => {
    let searchDiv = document.getElementById("searchbar");
    let searchInput = searchDiv.getElementsByTagName("input")[0];
    let searchSubmit = searchDiv.getElementsByTagName("i")[0];
    searchInput.addEventListener("keypress", e => {
        if(e.key === "Enter" && searchInput.value.trim() !== "") {
            getAndDisplay(searchInput.value);
            searchInput.value = "";
            if(document.getElementsByClassName("delete-city-btn").length !== 0 && document.getElementsByClassName("delete-city-btn")[0].style.display === "block") editSavedCities().toggleDeleteBtn();
        }
    });
    searchSubmit.addEventListener("click", () => {
        if(searchInput.value.trim() !== "") {
            getAndDisplay(searchInput.value);
            searchInput.value = "";
            if(document.getElementsByClassName("delete-city-btn").length !== 0 && document.getElementsByClassName("delete-city-btn")[0].style.display === "block") editSavedCities().toggleDeleteBtn();
        }
    });
})();

let bookmark = (() => {
    let bookmarkBtn = document.getElementById("bookmark-btn");
    let bookmarkIcon = bookmarkBtn.getElementsByTagName("i")[0];
    let bookmarkMessage = bookmarkBtn.getElementsByTagName("p")[0];
    let toggleBookmark = () => {
        let cityNodeList = document.getElementById("saved-cities").getElementsByTagName("li");
        let cityArr = [...cityNodeList].map(c => c.textContent);

        let currentCityName = document.getElementsByTagName("h1")[0].textContent;
        let index = cityArr.indexOf(currentCityName);

        //Previously bookmarked, clicked to unbookmark
        if(index !== -1) {
            bookmarkIcon.classList.remove("fa-solid");
            bookmarkIcon.classList.add("fa-regular");
            bookmarkMessage.textContent = "Bookmark the current city";
            document.getElementById("saved-cities").getElementsByTagName("div")[index].remove();
        }
        //Not bookmarked yet, click to bookmark
        else {
            if(document.getElementsByClassName("delete-city-btn").length !== 0 && document.getElementsByClassName("delete-city-btn")[0].style.display === "block") editSavedCities().toggleDeleteBtn();
            bookmarkIcon.classList.add("fa-solid");
            bookmarkIcon.classList.remove("fa-regular");
            bookmarkMessage.textContent = "Current city has been bookmarked";
            let savedDiv = document.createElement("div");

            let savedCity = document.createElement("li");
            savedCity.textContent = currentCityName;
            savedCity.onclick = () => {
                if(savedCity.textContent !== document.getElementsByTagName("h1")[0].textContent) getAndDisplay(currentCityName);
            }

            let deleteBtn = document.createElement("button");
            deleteBtn.classList.add("delete-city-btn");
            let icon = document.createElement("i");
            icon.classList.add("fa-solid");
            icon.classList.add("fa-circle-minus");
            deleteBtn.append(icon);
            deleteBtn.onclick = () => {
                savedDiv.remove();
                if(savedCity.textContent === document.getElementsByTagName("h1")[0].textContent) {
                    bookmarkIcon.classList.remove("fa-solid");
                    bookmarkIcon.classList.add("fa-regular");
                    bookmarkMessage.textContent = "Bookmark the current city";
                }
                localStorageModule.storage().populateStorage();
            }

            savedDiv.append(savedCity, deleteBtn)
            document.getElementById("saved-cities").append(savedDiv);
        }
        localStorageModule.storage().populateStorage();
    }
    bookmarkBtn.addEventListener("click", () => toggleBookmark());
})();

//readd events from saved cities in storage
if(document.getElementsByClassName("delete-city-btn").length !== 0) {
    if(document.getElementsByClassName("delete-city-btn")[0].style.display === "block") editSavedCities().toggleDeleteBtn();
    let savedCities = [...document.getElementById("saved-cities").getElementsByTagName("div")];
    savedCities.forEach(c => {
        c.getElementsByTagName("li")[0].onclick = () => {
            if(c.textContent !== document.getElementsByTagName("h1")[0].textContent) getAndDisplay(c.textContent);
        }
        let deleteBtn = c.getElementsByTagName("button")[0];
        deleteBtn.onclick = () => {
            c.remove();
            if(c.textContent === document.getElementsByTagName("h1")[0].textContent) {
                document.getElementById("bookmark-btn").getElementsByTagName("i")[0].classList.remove("fa-solid");
                document.getElementById("bookmark-btn").getElementsByTagName("i")[0].classList.add("fa-regular");
                document.getElementById("bookmark-btn").getElementsByTagName("p")[0].textContent = "Bookmark the current city";
            }
            localStorageModule.storage().populateStorage();
        }
    });
}

