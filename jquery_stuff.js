
$(document).ready(function(){
	
	$("#homeLinks").hide();
	$("#newsLinks").hide();
	$("#contactLinks").hide();
	$("#aboutLinks").hide();
	
	$(".navigation_bar").mouseleave(function(){
		$("#homeLinks").slideUp("slow");
		$("#newsLinks").slideUp("slow");
		$("#contactLinks").slideUp("slow");
		$("#aboutLinks").slideUp("slow");
	});
	
	$("a[href='#home']").mouseenter(function(){
		$("#homeLinks").slideDown("slow");
		$("#newsLinks").slideUp("slow");
		$("#contactLinks").slideUp("slow");
		$("#aboutLinks").slideUp("slow");
	});
	
	$("a[href='#news']").mouseenter(function(){
		$("#homeLinks").slideUp("slow");
		$("#newsLinks").slideDown("slow");
		$("#contactLinks").slideUp("slow");
		$("#aboutLinks").slideUp("slow");
	});
	
	$("a[href='#contact']").mouseenter(function(){
		$("#homeLinks").slideUp("slow");
		$("#newsLinks").slideUp("slow");
		$("#contactLinks").slideDown("slow");
		$("#aboutLinks").slideUp("slow");
	});

	$("a[href='#about']").mouseenter(function(){
		$("#homeLinks").slideUp("slow");
		$("#newsLinks").slideUp("slow");
		$("#contactLinks").slideUp("slow");
		$("#aboutLinks").slideDown("slow");
	});
	
	$("#newsLinks").mouseleave(function(){
		$("#newsLinks").slideUp("slow");
	});
	$("#homeLinks").mouseleave(function(){
		$("#homeLinks").slideUp("slow");
	});
	$("#contactLinks").mouseleave(function(){
		$("#contactLinks").slideUp("slow");
	});
	$("#aboutLinks").mouseleave(function(){
		$("#aboutLinks").slideUp("slow");
	});
	
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
	 	$(".animated1").css("background-color", "red");
		$(".animated1")
		.animate({left: '100px'},'slow')
		.animate({left: '0px'},'slow');
		
		$(".animated2").css("background-color", "blue");
		$(".animated2")
		.animate({left: '100px'},2000)
		.animate({left: '0px'},2000);	 
		
		$(".animated3").css("background-color", "yellow");	
		$(".animated3")
		.animate({bottom: '50px'},'slow')
		.animate({height: '+=400px'}, 'slow')
		.animate({bottom: '-=50px'}, 'slow')
		.animate({height: '-=400px'}, 'slow');	
	});
	
	$(".btn_destroy").click(function(){
		var buttonAnimated=$(".btn_animated"); //get
		buttonAnimated.attr('value', 'I am Animated!'); //set
		
		$("select").fadeOut(4000);
		$("input").fadeOut(5000);
		$(".navigation_bar").fadeOut(5000);
		
		$(".btn_submit")
		.css("background-color", "yellow")
		.css("width","100px")
		.css("height","100px")
		.fadeOut("slow");
	
		//$(".btn_submit").animate({right: '250px'},'slow');
	});
	
});	