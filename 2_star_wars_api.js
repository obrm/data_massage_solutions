/*
  The following API call returns an array of objects representing all the "planets" in the Star Wars universe:  
  https://swapi.dev/api/planets
*/

const data = {
  count: 60,
  next: "https://swapi.dev/api/planets/?page=2",
  previous: null,
  results: [
    {
      name: "Tatooine",
      rotation_period: "23",
      orbital_period: "304",
      diameter: "10465",
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      surface_water: "1",
      population: "200000",
      residents: [
        1,
        2,
        4,
        6,
        7,
        8,
        9,
        11,
        43,
        62
      ],
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ],
      created: "2014-12-09T13:50:49.641000Z",
      edited: "2014-12-20T20:58:18.411000Z",
      url: "https://swapi.dev/api/planets/1/"
    },
    {
      name: "Alderaan",
      rotation_period: "24",
      orbital_period: "364",
      diameter: "12500",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grasslands, mountains",
      surface_water: "40",
      population: "2000000000",
      residents: [
        5,
        68,
        81
      ],
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/6/"
      ],
      created: "2014-12-10T11:35:48.479000Z",
      edited: "2014-12-20T20:58:18.420000Z",
      url: "https://swapi.dev/api/planets/2/"
    },
    {
      name: "Yavin IV",
      rotation_period: "24",
      orbital_period: "4818",
      diameter: "10200",
      climate: "temperate, tropical",
      gravity: "1 standard",
      terrain: "jungle, rainforests",
      surface_water: "8",
      population: "1000",
      residents: [],
      films: [
        "https://swapi.dev/api/films/1/"
      ],
      created: "2014-12-10T11:37:19.144000Z",
      edited: "2014-12-20T20:58:18.421000Z",
      url: "https://swapi.dev/api/planets/3/"
    },
    {
      name: "Hoth",
      rotation_period: "23",
      orbital_period: "549",
      diameter: "7200",
      climate: "frozen",
      gravity: "1.1 standard",
      terrain: "tundra, ice caves, mountain ranges",
      surface_water: "100",
      population: "unknown",
      residents: [],
      films: [
        "https://swapi.dev/api/films/2/"
      ],
      created: "2014-12-10T11:39:13.934000Z",
      edited: "2014-12-20T20:58:18.423000Z",
      url: "https://swapi.dev/api/planets/4/"
    },
    {
      name: "Dagobah",
      rotation_period: "23",
      orbital_period: "341",
      diameter: "8900",
      climate: "murky",
      gravity: "N/A",
      terrain: "swamp, jungles",
      surface_water: "8",
      population: "unknown",
      residents: [],
      films: [
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
      ],
      created: "2014-12-10T11:42:22.590000Z",
      edited: "2014-12-20T20:58:18.425000Z",
      url: "https://swapi.dev/api/planets/5/"
    },
    {
      name: "Bespin",
      rotation_period: "12",
      orbital_period: "5110",
      diameter: "118000",
      climate: "temperate",
      gravity: "1.5 (surface), 1 standard (Cloud City)",
      terrain: "gas giant",
      surface_water: "0",
      population: "6000000",
      residents: [
        26
      ],
      films: [
        "https://swapi.dev/api/films/2/"
      ],
      created: "2014-12-10T11:43:55.240000Z",
      edited: "2014-12-20T20:58:18.427000Z",
      url: "https://swapi.dev/api/planets/6/"
    },
    {
      name: "Endor",
      rotation_period: "18",
      orbital_period: "402",
      diameter: "4900",
      climate: "temperate",
      gravity: "0.85 standard",
      terrain: "forests, mountains, lakes",
      surface_water: "8",
      population: "30000000",
      residents: [
        30
      ],
      films: [
        "https://swapi.dev/api/films/3/"
      ],
      created: "2014-12-10T11:50:29.349000Z",
      edited: "2014-12-20T20:58:18.429000Z",
      url: "https://swapi.dev/api/planets/7/"
    },
    {
      name: "Naboo",
      rotation_period: "26",
      orbital_period: "312",
      diameter: "12120",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grassy hills, swamps, forests, mountains",
      surface_water: "12",
      population: "4500000000",
      residents: [
        3,
        21,
        35,
        36,
        37,
        38,
        39,
        42,
        60,
        61,
        66
      ],
      films: [
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ],
      created: "2014-12-10T11:52:31.066000Z",
      edited: "2014-12-20T20:58:18.430000Z",
      url: "https://swapi.dev/api/planets/8/"
    },
    {
      name: "Coruscant",
      rotation_period: "24",
      orbital_period: "368",
      diameter: "12240",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "cityscape, mountains",
      surface_water: "unknown",
      population: "1000000000000",
      residents: [
        34,
        55,
        74
      ],
      films: [
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ],
      created: "2014-12-10T11:54:13.921000Z",
      edited: "2014-12-20T20:58:18.432000Z",
      url: "https://swapi.dev/api/planets/9/"
    },
    {
      name: "Kamino",
      rotation_period: "27",
      orbital_period: "463",
      diameter: "19720",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "ocean",
      surface_water: "100",
      population: "1000000000",
      residents: [
        22,
        72,
        73
      ],
      films: [
        "https://swapi.dev/api/films/5/"
      ],
      created: "2014-12-10T12:45:06.577000Z",
      edited: "2014-12-20T20:58:18.434000Z",
      url: "https://swapi.dev/api/planets/10/"
    }
  ]
};

// Question 1: Return an object of the planet with the smallest population that has a temperate climate and mountains terrain.

// Solution:
const specificClimateTerrainPlanet = data.results
// The filter method is used to iterate through the data.results array and select the planets that have a specific climate and terrain.
  .filter(planet => planet.climate === 'temperate' && planet.terrain.includes('mountains'))
  // The sort method is used to sort the planets by population in ascending order.
  .sort((a, b) => a.population - b.population)
  // The slice method is used to extract the first element of the array
  .slice(0, 1);

console.log("specificClimateTerrainPlanet", specificClimateTerrainPlanet);


// Question 2: Extract the names of all the planets that have a 'temperate' climate, and return an object with the name of the planet, the climate and the number of films in which it was featured, also sort it by the number of films in descending order.

// Solution:
specificClimatePlanet = [];
// A for of loop is used to iterate through the data.results array and select the planet that have the specific climate.
for (const planet of data.results) {
  // An if else statement is used to check if the planet have the specific climate
  if (planet.climate === 'temperate') {
    // The resulting array contains objects, each object has the name of the planet, the climate and the number of films.
    specificClimatePlanet.push({ name: planet.name, climate: planet.climate, films: planet.films.length });
  }
}
// The sort method is used to sort the planets by number of films in descending order.
specificClimatePlanet = specificClimatePlanet.sort((a, b) => b.films - a.films);

console.log("specificClimatePlanet", specificClimatePlanet);


// Question 3: Return an array of objects of planets which appeared in more than 3 films. Each object should have the name of the planet, the climate, the terrain and the number of films.

// Solution:
const moreThanThree = [];
// Object.entries method is used to extract the key and value of each element in the data.results object
// A for in loop is used to iterate through the extracted data
for (const [index, planet] of Object.entries(data.results)) {
  // An if else statement is used to check if the planet have more than 3 films
  if (planet.films.length > 3) {
    // The resulting array contains objects, each object has the name of the planet, the climate, the terrain and the number of films.
    moreThanThree.push({ name: planet.name, climate: planet.climate, terrain: planet.terrain, films: planet.films.length });
  }
}
console.log("moreThanThree", moreThanThree);


// Question 4: Extract the names of all the planets that have a temperate climate and mountains terrain, and return an array of objects, each object has the name of the planet, the climate, the terrain, the number of films and the number of residents.

// Solution:
const specificClimateTerrainPlanets = data.results
// The filter method is used to iterate through the data.results array and select the planets that have a specific climate and terrain.
  .filter(planet => planet.climate === 'temperate' && planet.terrain.includes('mountains'))
  // The map method is used to extract the name, climate, terrain, the number of films and the number of residents of each planet
  .map(planet => {
    return {
      name: planet.name,
      climate: planet.climate,
      terrain: planet.terrain,
      films: planet.films.length,
      // The reduce method is used to count the number of residents in each planet.
      residents: planet.residents.reduce((acc, val) => acc + val, 0)
    };
  });
console.log("specificClimateTerrainPlanets", specificClimateTerrainPlanets);


// Question 5: Return an array with 2 objects. One object with the name of the planet that has the most number of films featured in and the number of films, and an object of the planet that has the least number of films featured in and the number of films.

// Solution:
planets = data.results;
// The spread operator (...) and the map method are used to extract the films property of each planet and find the max and min values.
const maxFilms = Math.max(...planets.map(planet => planet.films.length));
const minFilms = Math.min(...planets.map(planet => planet.films.length));

// The find method is used to find the planet which has the most and the least films featured in
const maxFilmsPlanet = planets.find(planet => planet.films.length === maxFilms);
const minFilmsPlanet = planets.find(planet => planet.films.length === minFilms);

// The result is an array of objects, each object has the name of the planet and the number of films.
const maxMinFilmsPlanet = [
  { name: maxFilmsPlanet.name, films: maxFilms },
  { name: minFilmsPlanet.name, films: minFilms }
];
console.log("maxMinFilmsPlanet", maxMinFilmsPlanet);


// Question 6: Extract the name, climate, terrain and the number of films for all the planets, and return an object that has the name of the planet as the key and the other data as the value, using for in loop, object.entries method, and if else statement
// Solution:
planetsData = {};
// Object.entries method is used to extract the key and value of each element in the data.results object
// A for in loop is used to iterate through the extracted data
for (const [index, planet] of Object.entries(data.results)) {
  // The resulting object has the planet name as the key and an object as the value that contains the climate, terrain and the number of films of each planet
  planetsData[planet.name] = { climate: planet.climate, terrain: planet.terrain, films: planet.films.length };
}
console.log("planetsData", planetsData);
