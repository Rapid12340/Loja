$(document).ready(function(){
    $("#topBtn").click(function(){
        $('html , body').animate({scrollTop: 0},800);
    });
});

$(document).ready(function (){

    $(".icon").on("click",function (){
        
        //Se o menu estiver fechado abrir o menu caso contrario fechar
        if( $(".hr").css("display") == "none" ){
            $(".hr").css("display","block");
        }else{
            $(".hr").css("display","none");
        }
    });


});