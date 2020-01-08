import $ from "jquery";

export const creaVignettePoke = (poke) => {
    const vignette = $(`
        <div class="vignette" id="${poke.id}">
        </div>
    `);
    const noEventDiv = $(`
        <div class="noEvent">
            <img src="${poke.img}">
        </div>
    `);
    const divContenu = $(`
        <div>
            <span>${poke.numero}</span>
            <h4>${poke.nom}</h4>
        </div>
    `);
    poke.type.forEach((e) => {
        divContenu.append(`<img src="public\\assets\\images\\type\\${e}.png">`);
    });
    noEventDiv.append(divContenu);
    vignette.append(noEventDiv);
    $('#content').append(vignette);
}