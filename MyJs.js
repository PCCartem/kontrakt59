	$(document).ready(function() {
$(".button-to-down").click(function(){
//Необходимо прокрутить в конец страницы
var curPos=$(document).scrollTop();
var height=$("body").height();
var scrollTime=1000;
$("body,html").animate({"scrollTop":750},scrollTime);
});
});

	$(document).ready(function() {
$(".for_to_up").click(function(){
//в начало страницы
var curPos=$(document).scrollTop();
var height=$("body").height();
var scrollTime=1000;
$("body,html").animate({"scrollTop":0},scrollTime);
});
});


	$(document).ready(function() {
		$('.button-to-down').hide();
    $('main').mouseover(function(){
		$('.button-to-down').show(1000);
	});
	});

		$(document).ready(function() {
		$('.for_forma2').hide();
      $('.car,.good_service>button,.send_big_thing>div>button,.work_with_clients1_block1_button').click(function(){
		$('.for_forma2').show(1000);
	});
	});
	
			$(document).ready(function() {
		
      $('.closes,.btn-primary').click(function(){
		$('.for_forma2').hide(1000);
	});

	});

$(document).ready(function() {
		
      $('.auto_zap').click(function(){
	var curPos=$(document).scrollTop();
var height=$("body").height();
var scrollTime=1000;
$("body,html").animate({"scrollTop":750},scrollTime);
});
	});

$(document).ready(function() {
		
      $('.nav li:nth-child(3n)').click(function(){
	var curPos=$(document).scrollTop();
var height=$("body").height();
var scrollTime=1000;
$("body,html").animate({"scrollTop":1790},scrollTime);
});
	});

$(document).ready(function() {
		
      $('.nav li:nth-child(5n)').click(function(){
	var curPos=$(document).scrollTop();
var height=$("body").height();
var scrollTime=1000;
$("body,html").animate({"scrollTop":4510},scrollTime);
});
	});


$(document).ready(function() {
    
      $('.nav li:nth-child(4n)').click(function(){
  var curPos=$(document).scrollTop();
var height=$("body").height();
var scrollTime=1000;
$("body,html").animate({"scrollTop":2680},scrollTime);
});
  });


$(document).ready(function() {
    
      $('.to_full_forms').click(function(){
  var curPos=$(document).scrollTop();
var height=$("body").height();
var scrollTime=2000;
$("body,html").animate({"scrollTop":3150},scrollTime);
});
  });
  
  $(document).ready(function() {
    $('.active2').click(function(){
  $('.active1').attr('class',"activ");
    $('.active1').attr('class',"active3");
      $('.active1').attr('class',"active4");
        $('.active1').attr('class',"active5");
        $('.active2').attr('class',"active1");

  });
  });

   $(document).ready(function() {
    $('.active3').click(function(){
  $('.active1').attr('class',"activ");
    $('.active1').attr('class',"active2");
      $('.active1').attr('class',"active4");
        $('.active1').attr('class',"active5");
        $('.active3').attr('class',"active1");

  });
  });

    $(document).ready(function() {
    $('.active4').click(function(){
  $('.active1').attr('class',"activ");
    $('.active1').attr('class',"active2");
      $('.active1').attr('class',"active3");
        $('.active1').attr('class',"active5");
        $('.active4').attr('class',"active1");

  });
  });

     $(document).ready(function() {
    $('.active5').click(function(){
  $('.active1').attr('class',"activ");
    $('.active1').attr('class',"active2");
      $('.active1').attr('class',"active3");
        $('.active1').attr('class',"active4");
        $('.active5').attr('class',"active1");

  });
  }); 

     $(function(){ 
     var navMain = $(".navbar-collapse");

     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
 });