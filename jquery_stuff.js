
$(document).ready(function(){
	
	$(".btn_submit").mouseenter(function(){
		$(this).css("width","200px");
	});
	
	$(".btn_submit").mouseleave(function(){
		$(this).css("width","60px");
	});
	
	$(".btn_submit").click(function(){
		alert($("firstname").text());
		$(".showData").append(
		"<b>First Name: <b>"+$("firstname").text()+
		"<br><b>Last Name: <b>"+$("lastname").text()+
		"<br><b>Gender: <b>"+$("input[type='radio']").text()+
		"<br><b>Religion: <b>"+$("select[name='Religion']").text()+
		"<br><b>Profession: <b>"+$("select[name='Profession']").text()+
		"<br><b>Experience: <b>"+$("input[type='number']").text());
		$("a[name='help']").text("Congrats!");
		$("form").hide();
	});
	
	$(".btn_animated").click(function(){
		// $(".showData").append();
		$(".animated1")
		.css("color", "red")
		.css("width","200px")
		.css("height","200px")
		.animate({left: '250px'})
		.fadeIn("slow")
		.animate({right: '250px'});
	});
});	