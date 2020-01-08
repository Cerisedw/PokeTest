import $ from "jquery";

export const creaNavbar = () => {
    $("#navbar").append(`
        <select id="searchSelect">
            <option value="plante">Plante</option>
            <option value="eau">Eau</option>
            <option value="feu">Feu</option>
            <option value="insecte">Insecte</option>
            <option value="psy">Psy</option>
            <option value="vol">Vol</option>
            <option value="electrik">Electrik</option>
            <option value="acier">Acier</option>
            <option value="combat">Combat</option>
            <option value="dragon">Dragon</option>
            <option value="fee">Fée</option>
            <option value="glace">Glace</option>
            <option value="normal">Normal</option>
            <option value="poison">Poison</option>
            <option value="roche">Roche</option>
            <option value="sol">Sol</option>
            <option value="spectre">Spectre</option>
            <option value="tenebres">Ténèbres</option>
        </select>
        <button id="all">Tout afficher</button>
    `);
};