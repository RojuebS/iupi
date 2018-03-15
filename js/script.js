$('document').ready( function() {
    $('.valida_form').submit( (ev) => {
        ev.preventDefault();
        let element = ev.target;
        $(element).find('.validar').find('input, textarea').each((n, el) => {
            console.log($(el).parent());
            if( $.trim($(el).val()) === ""){
                $(el).parent().addClass('error');
            }else{
                $(el).parent().removeClass('error');
            }
        });

        if($('.error').length === 0) {
            element.submit();
        }
    });
});