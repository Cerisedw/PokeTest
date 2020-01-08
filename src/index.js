import $ from "jquery";
import { pokedex } from "./data/data";
import { creaTableauPokedex, creaRowPokedex, showOnePokemon } from "./function/creaTableau";
import { creaVignettePoke } from "./function/creaVignette";
import { searchAll, searchByTypeSelect } from "./function/search";
import { creaNavbar } from "./function/creaContent";

// creaTableauPokedex();

// pokedex.forEach(creaRowPokedex);

creaNavbar();
pokedex.forEach(creaVignettePoke);
$('.vignette').on('click', showOnePokemon)


$('#all').on('click', () => {
    searchAll();
    $('.vignette').on('click', showOnePokemon);
    $('#searchSelect').val("");
});

$('#searchSelect').on('change', () => {
    searchByTypeSelect();
    $('.vignette').on('click', showOnePokemon);
    $('#searchSelect').val("");
});