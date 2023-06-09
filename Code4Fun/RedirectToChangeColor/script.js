function alterarCorFrase(obj){
    let cor = $(obj).val();
    $(obj).prev().css("color", cor);
}

function alterarCorPagina(obj){
    let cor = $(obj).val();
    $("body").css("background-color", cor);
}
