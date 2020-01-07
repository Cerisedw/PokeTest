import $ from "jquery";
import { pokedex } from "./data/data";
import { creaTableauPokedex, creaRowPokedex } from "./data/creaTableau";
import { creaVignettePoke } from "./data/creaVignette";

// creaTableauPokedex();

// pokedex.forEach(creaRowPokedex);

pokedex.forEach(creaVignettePoke);