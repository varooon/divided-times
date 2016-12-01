$(document).ready(function(){

  // $(".international").on("click", function(event){
  //   //Stops link from trying to navigate away
  //   event.preventDefault();
  //
  //   //If International has "active" class, then remove active class & slideUp the div
  //   if($(this).hasClass("active")){
  //     $(this).removeClass("active");
  //     $("#slide-down").slideUp(1000);
  //
  //   } else{
  //     //If International does not have "active" class, then slideDown & display only the International content
  //     $("#slide-down").slideDown(1000);
  //     $("#primary-nav li").removeClass("active");
  //     $(this).addClass("active");
  //
  //     //show only the international section
  //     $("#international-drop").show();
  //     $("#politics-drop").hide();
  //     $("#business-drop").hide();
  //     $("#technology-drop").hide();
  //     $("#culture-drop").hide();
  //     $("#blogs-drop").hide();
  //   }
  //
  // });
  //
  // $(".politics").on("click", function(event){
  //   //Stops link from trying to navigate away
  //   event.preventDefault();
  //
  //   if($(this).hasClass("active")){
  //
  //
  //   } else{
  //     $("#slide-down").slideDown(1000);
  //     $("#primary-nav li").removeClass("active");
  //     $(this).addClass("active");
  //
  //     //show only the politics section
  //     $("#international-drop").hide();
  //     $("#politics-drop").show();
  //     $("#business-drop").hide();
  //     $("#technology-drop").hide();
  //     $("#culture-drop").hide();
  //     $("#blogs-drop").hide();
  //   }
  //
  // });



  $("#primary-nav li").on("click", function(event){
    event.preventDefault();

    //store the href data of each Div in displayDesiredDiv variable
    var displayDesiredDiv = $(this).children("a").attr("href");
    // console.log(displayDesiredDiv);

    // if the selected tab has class "active", then remove class "active" on click & div slide up
    if ($(this).hasClass("active")){
      $(this).removeClass("active");
      $("#slide-down").slideUp();
    } else{ //if no "active" class then...
      //slide down #slide-down div
      $("#slide-down").slideDown();
      //append class "active" to the clicked Div
      $(this).toggleClass("active");
      //remove class "active" of all the other Divs (siblings)
      $(this).siblings().removeClass("active");

      //hide the #slide-down divs of all siblings
      $(displayDesiredDiv).siblings().hide();
      //show only the appropriate div
      $(displayDesiredDiv).show();

    }

  });


});
