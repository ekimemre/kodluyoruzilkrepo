import getData from "./first-module.js";

const result = await getData(1);
console.log(result);

// "app.js" dosyasına yazmış olduğunuz "getData" isimli fonksiyonu "import" edin.
// Bir alt satırda bu fonksiyonu çalıştırın ve gelen sonucu log'layın.