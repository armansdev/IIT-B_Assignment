// JSON data for Animals
var catsData = [
    {
        name: "Lion",
        location: "Africa",
        size: "8 ft",
        image: "https://cdn.britannica.com/30/150930-120-D3D93F1E/lion-Namibia.jpg",
    },
    {
        name: "Tiger",
        location: "Asia",
        size: "10 ft",
        image: "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg",
    },
    {
        name: "Leopard",
        location: "Africa and Asia",
        size: "5 ft",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nagarhole_Kabini_Karnataka_India%2C_Leopard_September_2013.jpg/1200px-Nagarhole_Kabini_Karnataka_India%2C_Leopard_September_2013.jpg",
    },
    {
        name: "Cheetah",
        location: "Africa",
        size: "5 ft",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDM5G0-TO32s1u2u8ZjQnpk9DQQxf2hhrdA&s",
    },
];
var dogsData = [
    {
        name: "Rottweiler",
        location: "Germany",
        size: "2 ft",
        image: "https://www.lovemydogz.com/wp-content/uploads/2021/04/rottweiler-kocka-scaled.jpg",
    },
    {
        name: "German Shepherd",
        location: "Germany",
        size: "2 ft",
        image: "https://worldanimalfoundation.org/wp-content/uploads/2024/02/german-shepherd-2-3.jpg",
    },
    {
        name: "Labrador",
        location: "UK",
        size: "2 ft",
        image: "https://www.dogster.com/wp-content/uploads/2024/04/labrador-retriever-dog-standing-in-the-grass_Alexander-Rim_Shutterstock.jpg",
    },
    {
        name: "Alabai",
        location: "Turkey",
        size: "4 ft",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2.CAO_in_Hungary.jpg/1200px-2.CAO_in_Hungary.jpg",
    },
];
var fishData = [
    {
        name: "Humpback Whale",
        location: "Atlantic Ocean",
        size: "15 ft",
        image: "https://www.fisheries.noaa.gov/s3//styles/original/s3/2023-03/640x427-Whale-Humpback-markedDW.png?itok=EvYiJB4E",
    },
    {
        name: "Killer Whale",
        location: "Atlantic Ocean",
        size: "12 ft",
        image: "https://nextlevelsailing.com/wp-content/uploads/sites/2044/2019/10/46962987_l.jpg",
    },
    {
        name: "Tiger Shark",
        location: "Ocean",
        size: "8 ft",
        image: "https://marinesanctuary.org/wp-content/uploads/2020/10/5159724910_1070dd65f0_o.jpg",
    },
    {
        name: "Hammerhead Shark",
        location: "Ocean",
        size: "8 ft",
        image: "https://cdn.shopify.com/s/files/1/0023/6158/9871/files/SCALLOPED_HAMMERHEAD_480x480.png?v=1720526269",
    },
];
// AnimalTable Class
var AnimalTable = /** @class */ (function () {
    function AnimalTable(data, tableBodyId) {
        this.data = data;
        this.tableBodyId = tableBodyId;
    }
    AnimalTable.prototype.render = function () {
        var tableBody = document.getElementById(this.tableBodyId);
        if (tableBody) {
            tableBody.innerHTML = this.generateTableRows();
        }
    };
    AnimalTable.prototype.generateTableRows = function () {
        var _this = this;
        return this.data
            .map(function (animal) { return "\n            <tr>\n                <td>".concat(animal.name, "</td>\n                <td>").concat(animal.location, "</td>\n                <td>").concat(animal.size, "</td>\n                <td><img src=\"").concat(animal.image, "\" alt=\"").concat(animal.name, "\" class=\"animal-image\" width=\"100\"></td>\n                <td>\n                    <button class=\"btn btn-warning btn-sm\" onclick=\"editAnimal('").concat(_this.tableBodyId, "', '").concat(animal.name, "')\">Edit</button>\n                    <button class=\"btn btn-danger btn-sm\" onclick=\"deleteAnimal('").concat(_this.tableBodyId, "', '").concat(animal.name, "')\">Delete</button>\n                </td>\n            </tr>\n        "); })
            .join("");
    };
    AnimalTable.prototype.sort = function (field) {
        this.data.sort(function (a, b) { return (a[field] > b[field] ? 1 : -1); });
        this.render();
    };
    AnimalTable.prototype.add = function (animal) {
        if (!this.data.find(function (a) { return a.name === animal.name; })) {
            this.data.push(animal);
            this.render();
        }
        else {
            alert("Animal with the same name already exists!");
        }
    };
    AnimalTable.prototype.delete = function (name) {
        this.data = this.data.filter(function (a) { return a.name !== name; });
        this.render();
    };
    AnimalTable.prototype.edit = function (name, newData) {
        var animal = this.data.find(function (a) { return a.name === name; });
        if (animal) {
            Object.assign(animal, newData);
            this.render();
        }
    };
    return AnimalTable;
}());
// Initialize Tables
var catsTable = new AnimalTable(catsData, "catsTableBody");
var dogsTable = new AnimalTable(dogsData, "dogsTableBody");
var fishTable = new AnimalTable(fishData, "fishTableBody");
// Render Tables on Load
document.addEventListener("DOMContentLoaded", function () {
    catsTable.render();
    dogsTable.render();
    fishTable.render();
});
// Sort Function
function sortTable(tableId, field) {
    if (tableId === "cats")
        catsTable.sort(field);
    else if (tableId === "dogs")
        dogsTable.sort(field);
    else if (tableId === "fish")
        fishTable.sort(field);
}
// Add Animal Function
function addAnimal(tableId) {
    var name = prompt("Enter animal name:");
    var location = prompt("Enter animal location:");
    var size = prompt("Enter animal size:");
    var image = "default.jpg"; // Default image
    if (name && location && size) {
        var newAnimal = { name: name, location: location, size: size, image: image };
        if (tableId === "cats")
            catsTable.add(newAnimal);
        else if (tableId === "dogs")
            dogsTable.add(newAnimal);
        else if (tableId === "fish")
            fishTable.add(newAnimal);
    }
    else {
        alert("All fields are required!");
    }
}
// Delete Animal Function
function deleteAnimal(tableId, name) {
    if (confirm("Are you sure you want to delete ".concat(name, "?"))) {
        if (tableId === "cats")
            catsTable.delete(name);
        else if (tableId === "dogs")
            dogsTable.delete(name);
        else if (tableId === "fish")
            fishTable.delete(name);
    }
}
// Edit Animal Function
function editAnimal(tableId, name) {
    var newName = prompt("Enter new name:", name);
    var newLocation = prompt("Enter new location:");
    var newSize = prompt("Enter new size:");
    if (newName && newLocation && newSize) {
        var newData = { name: newName, location: newLocation, size: newSize };
        if (tableId === "cats")
            catsTable.edit(name, newData);
        else if (tableId === "dogs")
            dogsTable.edit(name, newData);
        else if (tableId === "fish")
            fishTable.edit(name, newData);
    }
    else {
        alert("All fields are required!");
    }
}
