import $ from "jquery";
import { pokedex } from "./data/data";
import { creaTableauPokedex, creaRowPokedex } from "./function/creaTableau";
import { creaVignettePoke } from "./function/creaVignette";
import { searchAll, searchByTypeSelect } from "./function/search";
import { creaNavbar } from "./function/creaContent";

// creaTableauPokedex();

// pokedex.forEach(creaRowPokedex);

creaNavbar();
pokedex.forEach(creaVignettePoke);

$('#all').on('click', searchAll);

$('#searchSelect').on('change', searchByTypeSelect);