function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

if (getParameterByName("enviado") === "true") {    
    // Mostrar ventana
    $('#modalCenter').modal('show');
    // Limpiar url
    window.history.pushState("object or string", "Title", window.location.href.substring(window.location.href.lastIndexOf('/') + 1).split("?")[0]);    
    $('#btn-enviar').addClass('disabled').attr('disabled','disabled');
}




$('.navbar').find('.nav-item').on('click', e => {
    let op = $(e.target).attr('data-id');
    let positionOp = $('#' + op).offset().top;
    $('html, body').animate({scrollTop: positionOp}, 1000);
    $('.navbar').find('.nav-item.active').removeClass('active');
    $(e.target).addClass('active');
});