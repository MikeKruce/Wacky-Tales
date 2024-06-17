const handlebars = require('handlebars').compile;
const rpos = require('random-part-of-speech');

async function getRandomWord() {
    try {
        const response = await rpos.getAny(1);
        return response[0]; // Return the first word from the response
    } catch (err) {
        console.error('Error fetching word:', err);
        throw err;
    }
}

function renderFields(fields) {
    let markup = '';

    Object.keys(fields).forEach(part => {

        for (let i = 0; i < fields[part]; i++) {
            if (part.replace(/_/g, " ") == 'verbIng') {
                markup += `<div>Enter verb ending in -ing<input type='text' name='${part.replace(/_/g, " ")}' placeholder='Enter verb ending in -ing #${i + 1}' /></div>`;
            } else if (part.replace(/_/g, " ") == 'verbEd') {
                markup += `<div>Enter verb ending in -ed<input type='text' name='${part.replace(/_/g, " ")}' placeholder='Enter verb ending in -ed #${i + 1}' /></div>`;
            } else if (part.replace(/_/g, " ") == 'noun') {
                markup += `<div>Enter ${part.replace(/_/g, " ")}<input type='text' name='${part.replace(/_/g, " ")}' placeholder='Enter ${part.replace(/_/g, " ")} #${i + 1}' /></div>`;
            } else {
                markup += `<div>Enter ${part.replace(/_/g, " ")}<input type='text' name='${part.replace(/_/g, " ")}' placeholder='Enter ${part.replace(/_/g, " ")} #${i + 1}' /></div>`;
            }
        }

    });
    return markup;
}





module.exports = { renderFields, getRandomWord };