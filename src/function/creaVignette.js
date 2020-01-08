import $ from "jquery";

export const creaVignettePoke = (poke) => {
    const vignette = $(`
        <div class="vignette">
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
    vignette.append(divContenu);
    $('#content').append(vignette);
}