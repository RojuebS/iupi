$('document').ready( function() {
    $('.valida_form').submit( (ev) => {
        ev.preventDefault();
        let element = ev.target;
        $(element).find('.validar').find('input, textarea').each((n, el) => {
            if( $.trim($(el).val()) === ""){
                $(el).closest(".form-item").addClass('error');
            }else{
                $(el).closest(".form-item").removeClass('error');
            }
        });

        if($('.error').length === 0) {
            element.submit();
        }
    });
});