import $ from "jquery";
import { pokedex } from "../data/data";
import { creaVignettePoke } from "./creaVignette";


export const searchAll = () => {
    $('#content').empty();
    pokedex.forEach(creaVignettePoke);
};


export const searchByType = (e) => {
    e.preventDefault();
    $('#content').empty();
    const searchString = $('#searchBar').val().toLowerCase();
    const searchStringCapitalize = searchString.charAt(0).toUpperCase() + searchString.slice(1)
    console.log(searchStringCapitalize);
    pokedex.filter((pokemon) => pokemon.type.includes(searchStringCapitalize)).forEach(creaVignettePoke);
    $('#searchBar').val("");
};