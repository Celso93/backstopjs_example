 // exportar uma função ascincrona, ecmascript7, ascy wait
 module.exports = async page => {
    await page.type("#first-name", "primeiroNome");
    await page.type("#last-name", "lastName");
    await page.type("#email", "validEmail@email.com");
    await page.click("#agree");
};