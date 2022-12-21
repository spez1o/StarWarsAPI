export const BASE_URL = "https://swapi.dev/api/";

export async function fetchAll(classification) {
  try {
    const response = await fetch(BASE_URL + classification);
    const data = await response.json();

    return data.results;
  } catch (e) {
    console.log(e);
  }
}

// export async function fetchAllPeople() {
//   try {
//     const response = await fetch(BASE_URL + "people/");
//     const data = await response.json();

//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// }

export async function fetchAllFilms() {
  try {
    const response = await fetch(BASE_URL + "/films");
    const data = await response.json();

    return data.results;
  } catch (e) {
    console.log(e);
  }
}
// fetchAllFilms();

// export async function fetchAllSpecies() {
//   try {
//     const response = await fetch(BASE_URL + "species");
//     const data = await response.json();
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// }
// export async function fetchAllVehicles() {
//   try {
//     const response = await fetch(BASE_URL + "vehicles");
//     const data = await response.json();
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// }
// export async function fetchAllStarships() {
//   try {
//     const response = await fetch(BASE_URL + "starships");
//     const data = await response.json();
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// }
export async function fetchAllClassifications() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}
