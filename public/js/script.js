$(document).ready(function(){
	$("#js-map").colorbox({iframe:true, innerWidth:"80%", innerHeight:"90%"});
	$(".feedback button").colorbox({width:"450px", inline:true, href:".feedback-form"});
	$(".feedback-form form").bind("submit", function(){
		var $form = $(this);
		$.ajax({
			type: "post",
			url: "/",
			data: $form.serialize(),
			success: function(){
				$form.html("<p class='msg'>Спасибо, вы зарегистрированы! Следите за нами в твитере по хэштегу <a href='http://twitter.com/search/realtime/%23vldc'>#vldc</a> (на польского вебразработчика не обращайте внимание ;)</p>")
			},
			dataType: "json"
		});
		return false;
	});
});