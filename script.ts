const catsData = [
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
    image:
      "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg",
  },
  {
    name: "Leopard",
    location: "Africa and Asia",
    size: "5 ft",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nagarhole_Kabini_Karnataka_India%2C_Leopard_September_2013.jpg/1200px-Nagarhole_Kabini_Karnataka_India%2C_Leopard_September_2013.jpg",
  },
  {
    name: "Cheetah",
    location: "Africa",
    size: "5 ft",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDM5G0-TO32s1u2u8ZjQnpk9DQQxf2hhrdA&s",
  },
];

const dogsData = [
  {
    name: "Rottweiler",
    location: "Germany",
    size: "2 ft",
    image:
      "https://www.lovemydogz.com/wp-content/uploads/2021/04/rottweiler-kocka-scaled.jpg",
  },
  {
    name: "German Shepherd",
    location: "Germany",
    size: "2 ft",
    image:
      "https://worldanimalfoundation.org/wp-content/uploads/2024/02/german-shepherd-2-3.jpg",
  },
  {
    name: "Labrador",
    location: "UK",
    size: "2 ft",
    image:
      "https://www.dogster.com/wp-content/uploads/2024/04/labrador-retriever-dog-standing-in-the-grass_Alexander-Rim_Shutterstock.jpg",
  },
  {
    name: "Alabai",
    location: "Turkey",
    size: "4 ft",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2.CAO_in_Hungary.jpg/1200px-2.CAO_in_Hungary.jpg",
  },
];

const fishData = [
  {
    name: "Humpback Whale",
    location: "Atlantic Ocean",
    size: "15 ft",
    image:
      "https://www.fisheries.noaa.gov/s3//styles/original/s3/2023-03/640x427-Whale-Humpback-markedDW.png?itok=EvYiJB4E",
  },
  {
    name: "Killer Whale",
    location: "Atlantic Ocean",
    size: "12 ft",
    image:
      "https://nextlevelsailing.com/wp-content/uploads/sites/2044/2019/10/46962987_l.jpg",
  },
  {
    name: "Tiger Shark",
    location: "Ocean",
    size: "8 ft",
    image:
      "https://marinesanctuary.org/wp-content/uploads/2020/10/5159724910_1070dd65f0_o.jpg",
  },
  {
    name: "Hammerhead Shark",
    location: "Ocean",
    size: "8 ft",
    image:
      "https://cdn.shopify.com/s/files/1/0023/6158/9871/files/SCALLOPED_HAMMERHEAD_480x480.png?v=1720526269",
  },
];

class AnimalTable {
  private data: any[];
  private tableBodyId: string;

  constructor(data: any[], tableBodyId: string) {
    this.data = data;
    this.tableBodyId = tableBodyId;
  }

  render(): void {
    const tableBody = document.getElementById(this.tableBodyId);
    if (tableBody) {
      tableBody.innerHTML = this.generateTableRows();
    }
  }

  generateTableRows(): string {
    return this.data
      .map(
        (animal) => `
            <tr>
                <td>${animal.name}</td>
                <td>${animal.location}</td>
                <td>${animal.size}</td>
                <td><img src="${animal.image}" alt="${animal.name}" class="animal-image" width="100"></td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editAnimal('${this.tableBodyId}', '${animal.name}')">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteAnimal('${this.tableBodyId}', '${animal.name}')">Delete</button>
                </td>
            </tr>
        `
      )
      .join("");
  }

  sort(field: string): void {
    this.data.sort((a, b) => (a[field] > b[field] ? 1 : -1));
    this.render();
  }

  add(animal: any): void {
    if (!this.data.find((a) => a.name === animal.name)) {
      this.data.push(animal);
      this.render();
    } else {
      alert("Animal with the same name already exists!");
    }
  }

  delete(name: string): void {
    this.data = this.data.filter((a) => a.name !== name);
    this.render();
  }

  edit(name: string, newData: any): void {
    const animal = this.data.find((a) => a.name === name);
    if (animal) {
      Object.assign(animal, newData);
      this.render();
    }
  }
}

const catsTable = new AnimalTable(catsData, "catsTableBody");
const dogsTable = new AnimalTable(dogsData, "dogsTableBody");
const fishTable = new AnimalTable(fishData, "fishTableBody");

document.addEventListener("DOMContentLoaded", () => {
  catsTable.render();
  dogsTable.render();
  fishTable.render();
});

function sortTable(tableId: string, field: string): void {
  if (tableId === "cats") catsTable.sort(field);
  else if (tableId === "dogs") dogsTable.sort(field);
  else if (tableId === "fish") fishTable.sort(field);
}

function addAnimal(tableId: string): void {
  const name = prompt("Enter animal name:");
  const location = prompt("Enter animal location:");
  const size = prompt("Enter animal size:");
  const image = prompt("Enter url of animal image");

  if (name && location && size) {
    const newAnimal = { name, location, size, image };
    if (tableId === "cats") catsTable.add(newAnimal);
    else if (tableId === "dogs") dogsTable.add(newAnimal);
    else if (tableId === "fish") fishTable.add(newAnimal);
  } else {
    alert("All fields are required!");
  }
}

function deleteAnimal(tableId: string, name: string): void {
  if (confirm(`Are you sure you want to delete ${name}?`)) {
    if (tableId === "cats") catsTable.delete(name);
    else if (tableId === "dogs") dogsTable.delete(name);
    else if (tableId === "fish") fishTable.delete(name);
  }
}

function editAnimal(tableId: string, name: string): void {
  const newName = prompt("Enter new name:", name);
  const newLocation = prompt("Enter new location:");
  const newSize = prompt("Enter new size:");
  const newImage = prompt("Enter new url of image:");

  if (newName && newLocation && newSize) {
    const newData = {
      name: newName,
      location: newLocation,
      size: newSize,
      image: newImage,
    };
    if (tableId === "cats") catsTable.edit(name, newData);
    else if (tableId === "dogs") dogsTable.edit(name, newData);
    else if (tableId === "fish") fishTable.edit(name, newData);
  } else {
    alert("All fields are required!");
  }
}
