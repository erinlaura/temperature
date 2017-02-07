//$(document).ready(function(){
  //$('div').hover(function(){
    //$(this).addClass('.color');
  //});

//});

$(document).ready(function(){

    $(".nav_section").click(function(){
       if($(".dropdown").is(":visible")){
          $(".dropdown").slideUp("slow");
       }
       if($(this).next().children(".dropdown").is(":hidden")){
          $(this).next().children(".dropdown").slideDown("slow");
        $(this).next().addClass("dropdown_active");
       }
    });
    $("nav").mouseleave(function(){
      if($(".dropdown").is(":visible")){
         $(".dropdown").slideUp("300");
      }
    });
});
