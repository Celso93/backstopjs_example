// exportar uma função ascincrona, ecmascript7, ascy wait
// Elementos dinamicos devem ser escondidos em alguns casos

const fillFormsMandatory = require("./fillForms");

module.exports = async page => {
    await fillFormsMandatory(page);
    await page.click("button[type=\"submit\"]");
};