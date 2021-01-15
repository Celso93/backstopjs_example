 // exportar uma função ascincrona, ecmascript7, ascy wait
 module.exports = async page => {
    await page.type("#email", "invalid-email.com");
};