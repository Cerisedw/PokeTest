import $ from "jquery";

export const creaTableauPokedex = () => {
    const tableau = $(`
    <table>
        <thead>
        <tr>
            <th>N°</th>
            <th>Image</th>
            <th>Nom</th>
            <th>Type</th>
            <th>Localisation</th>
        </tr>
        </thead>
        <tbody id="listePoke">
        </tbody>
    </table>
    `);
    
    $("#content").append(tableau);    
};

export const creaRowPokedex = (poke) => {
        const row = $(`
        <tr>
            <td>${poke.numero}</td>
            <td>
                <img src='${poke.img}'>
            </td>
            <td>${poke.nom}</td>
        </tr>
        `);
        const types = $('<td></td>');
        poke.type.forEach((e) => {
            types.append(`<img src='public\\assets\\images\\type\\${e}.png'>`);
        });
        row.append(types);
        row.append(`<td>${poke.localisation}</td>`);
        $('#listePoke').append(row);
};