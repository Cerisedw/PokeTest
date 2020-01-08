import $ from "jquery";
import { pokedex } from "./data/data";
import { creaTableauPokedex, creaRowPokedex } from "./function/creaTableau";
import { creaVignettePoke } from "./function/creaVignette";
import { searchByType, searchAll } from "./function/search";

// creaTableauPokedex();

// pokedex.forEach(creaRowPokedex);

pokedex.forEach(creaVignettePoke);

$("#navbar").append(`
    <form>
        <input type="text" id="searchBar" placeholder="Recherche par type"></input>
        <button id="searchBtn">Recherche</button>
    </form>
    <button id="all">Tout afficher</button>
`);
$('#all').on('click', searchAll);


$('#searchBtn').on('click', searchByType);