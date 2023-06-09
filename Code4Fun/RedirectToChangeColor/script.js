function alterarCorFrase(obj){
    cor = $(obj).val();
    $(obj).prev().css("color", cor);
}

function alterarCorPagina(obj){
    cor = $(obj).val();
    $("body").css("background-color", cor);
}
