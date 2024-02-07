async function getAllPokemon() {
  try {
    const response = await fetch(
      "https://majazocom.github.io/Data/pokemons.json"
    );
    const data = await response.json();

    const array = [];
    data.forEach((item) => {
      array.push(item.name);
    });
    renderListConsole(array);
    renderListDOM(array, ".pokemon-list");
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getAllDogs() {
  try {
    const response = await fetch("https://majazocom.github.io/Data/dogs.json");
    const data = await response.json();

    const array = [];
    data.forEach((item) => {
      array.push(item.name);
    });
    renderListConsole(array);
    renderListDOM(array, ".dogs-list");
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getAllBooks() {
  try {
    const response = await fetch("https://majazocom.github.io/Data/books.json");
    const data = await response.json();

    const array = [];
    data.forEach((item) => {
      array.push(item.title);
    });
    renderListDOM(filterBooks(data, 500), ".books-list");
  } catch (error) {
    console.error("Error", error);
  }
}

async function getAllEmployees() {
  try {
    const response = await fetch(
      "https://majazocom.github.io/Data/attendees.json"
    );
    const data = await response.json();
    const employeesAttended = filterEmployees(data);
    const employeesAttendedWithAllergy = filterEmployeesAllergy(data);
    renderListDOM(employeesAttended, ".attending-list");
    renderListDOM(employeesAttendedWithAllergy, ".attending-with-allergy-list");
  } catch (error) {
    console.error("Error", error);
  }
}

function renderListConsole(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
  return list;
}

function renderListDOM(list, className) {
  const htmlElement = document.querySelector(className);

  list.forEach((item) => {
    htmlElement.innerHTML += `<h4>${item}</h4>`;
  });
}

function filterBooks(books, pageNr) {
  const list = [];
  books.forEach((book) => {
    if (book.pages < pageNr) {
      list.push(book.title);
    }
  });
  return list;
}

function filterEmployees(employees) {
  const list = [];
  employees.forEach((employee) => {
    if (employee.attending) {
      list.push(employee.name);
    }
  });

  return list;
}

function filterEmployeesAllergy(employees) {
  const list = [];
  employees.forEach((employee) => {
    if (employee.allergies.length !== 0 && employee.attending) {
      list.push(employee.name);
    }
  });

  return list;
}

getAllPokemon();
getAllDogs();
getAllBooks();
getAllEmployees();
