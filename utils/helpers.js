const handlebars = require('handlebars').compile;


function renderFields(fields) {
    let markup = '';
   
    Object.keys(fields).forEach(part => {

        for (let i = 0; i < fields[part]; i++) {
            markup += `<div><input type='text' name='${part}' placeholder='Enter ${part.replace(/_/g, " ")} #${i + 1}' /></div>`;
            
        }
    
    });
    return markup;
}

function add(start, add) {
    return start + add;
}
module.exports = { renderFields, add };