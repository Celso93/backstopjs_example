 // exportar uma função ascincrona, ecmascript7, ascy wait
module.exports = async page => {
    await page.select("#ticket-quantity", "3");
};