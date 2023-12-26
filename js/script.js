function showHide(divId) {
    $('.hidden-div').each( function() {
            $(this).hide();
     });
     $("#"+divId).show();
 
 }