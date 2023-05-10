export const sanitize = (string) => {
    //agregar sustitutos a caracteres especiales acá
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
        "`": "&grave;",
        "\\": "&#92;"
    };
    const reg = /[&<>"'/`\\]/ig; //agregar caracteres que hay que reemplazar acá
    string = string.replace(reg, (match)=>(map[match]));
    return string.trim();
}
  