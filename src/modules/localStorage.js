import {getIsMetric, setIsMetric} from "./converter.js";

//localStorage.clear();

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            e.code === 22 ||
            e.code === 1014 ||
            e.name === 'QuotaExceededError' ||
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            (storage && storage.length !== 0);
    }
}

const storage = () => {
    let populateStorage = () => {
        localStorage.setItem("savedCities", document.getElementById("saved-cities").innerHTML);
        localStorage.setItem("isMetric", getIsMetric());
    }

    let extractStorage = () => {
        document.getElementById("saved-cities").innerHTML = localStorage.getItem("savedCities");
        setIsMetric(localStorage.getItem("isMetric") === "true");
    }
    return {populateStorage, extractStorage};
}

if(storageAvailable("localStorage")) {
    if(!localStorage.getItem('isMetric')) storage().populateStorage();
    else storage().extractStorage();
}
else {
    console.log("Local storage not supported.");
}

export {storage};