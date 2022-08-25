import { TableProps } from "./type";

const ApiUrl = "https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84";

/* Selecting all the elements with the class name and storing them in a variable. */
const numberOfUsers = document.querySelectorAll(".number-users");
const ageOfUsers = document.querySelectorAll(".age");
const genderOfUsers = document.querySelectorAll(".gender");
const tableRow = document.querySelectorAll(".table-row");
const label = document.querySelector("label");
const previousButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");


let page = 1;
/**
 * It takes a string as an argument and sets the display property of the loader div to the value of the
 * argument
 * @param {string} displayType - string - This is the type of display we want to set the loader to.
 */
const loader = (displayType: string) => {
  (
    document.getElementsByClassName("loader")[0] as HTMLDivElement
  ).style.display = displayType;
};

/**
 * If the page is equal to 1, then disable the previous button, otherwise enable it
 */
const disableBtn = () => {
  (document.querySelector(".prev-btn") as HTMLButtonElement).disabled =
    page === 1 ? true : false;
};

/**
 * It takes the data from the API and displays it on the page
 * @param {TableProps[]} dataResponse - TableProps[] - this is the data that is returned from the API.
 */
const showData = (dataResponse: TableProps[]) => {
  tableRow.forEach((_, key) => {
    tableRow[key].setAttribute("id", `${dataResponse[key].id}`);
    tableRow[key].setAttribute("data-entryid", `${dataResponse[key].id}`);
    numberOfUsers[key].textContent = ` ${dataResponse[key].row}`;
    genderOfUsers[key].textContent = ` ${dataResponse[key].gender}`;
    ageOfUsers[key].textContent = ` ${dataResponse[key].age}`;
  });
  label.textContent = `page ${page}`;
};


/**
 * fetching data from the API and showing the data in the table
 */
const fetchTableData = () => {
  disableBtn();
  loader("block");

  fetch(`${ApiUrl}&page=${page}`)
    .then((res) => res.json())
    .then((data) => {
      loader("none");
      const results = data.results[0];
      const dataResponse = Object.values(results)[0];
      showData(dataResponse as TableProps[]);
    })
    .catch((err) => {
      loader("none");
      console.log(err);
    });
};

/**
 * If the type is prev and the page is not 1, then decrement the page and fetch the table data. If the
 * type is next, then increment the page and fetch the table data
 * @param {string} type - string - this is the type of button that was clicked. It can be either "prev"
 * or "next".
 */
const prevNextBtn = (type: string) => {
  if (type === "prev" && page !== 1) {
    page--;
    fetchTableData();
  } else if (type === "next") {
    page++;
    fetchTableData();
  }
};
 /* Listening for a click event on the previous button and then calling the prevNextBtn function with
  the argument "prev". */
  previousButton.addEventListener("click", () => prevNextBtn("prev"));

 /* Listening for a click event on the next button and then calling the prevNextBtn function with the
 argument "next". */
  nextButton.addEventListener("click", () => prevNextBtn("next"));

fetchTableData();

const startApp = async () => {
  fetchTableData();
};

document.addEventListener("DOMContentLoaded", startApp);
