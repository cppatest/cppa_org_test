
$(document).ready(function(){
	
	$(".btn_submit").mouseenter(function(){
		$(this).css("width","200px");
	});
	
	$(".btn_submit").mouseleave(function(){
		$(this).css("width","60px");
	});
	
	$(".btn_submit").click(function(){

		var firstname=$("input[name='firstname']").val();
		var lastname=$("input[name='lastname']").val();
		var gender=$("input[type='radio']").val();
		var religion=$("select[name='Religion']").val();
		var profession=$("select[name='Profession']").val();
		var experience=$("input[type='number']").val();
		
		$("form").empty();
		
		$(".showData").append(
		"<b>First Name: <b>"+ firstname+
		"<br><b>Last Name: <b>"+ lastname+
		"<br><b>Gender: <b>"+ gender+
		"<br><b>Religion: <b>"+ religion+
		"<br><b>Profession: <b>"+ profession+
		"<br><b>Experience: <b>"+ experience+ " years"); 
		
		$("a[name='help']").text("Congrats!");
		
	});
	
	$(".btn_animated").click(function(){
		// $(".showData").append();
		$(".animated1")
		.css("background-color", "red")
		.css("width","200px")
		.css("height","200px")
		.fadeOut("slow");
		
		//$(".animated1").animate({right: '250px'});
	});
});	