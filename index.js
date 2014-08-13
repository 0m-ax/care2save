$(document).ready(function () {
	$(document).on( "click",".submit", function() {
		isok=true;
		$('.input').removeClass("input-error")
		if($("input[name='EMAIL']").val().length==0){
		$("input[name='EMAIL']").addClass("input-error");
		isok=false;
		
		}
		if($("input[name='LNAME']").val().length==0){
				$("input[name='LNAME']").addClass("input-error");
				isok = false;
		}
		if($("input[name='FNAME']").val().length==0){
					$("input[name='FNAME']").addClass("input-error");

				isok = false;

		}
		if(isok){
		$.ajax({
        type: "POST",
        url: "http://care2save.us8.list-manage1.com/subscribe/post-json?u=f8a1f0d6a44f3a522008bfc32&id=b5d5e1a083&c=?",
        data: $('.email').serialize(),
        cache       : false,
        dataType    : 'json',
        contentType: "application/json; charset=utf-8",
        error       : function(err) { console.log(err) },
        success     : function(data) {
            if (data.result != "success") {
		$('.error').text(data.msg.substring(3));
		console.log(data);
		$("input[name='EMAIL']").addClass("input-error");
		            } else {
		            			$('.email').hide();
		$('.submit').hide();
		$('.form').find('h1').text("Thank you");
		$('.form').append("<p>"+data.msg+"</p>");
		$('.error').hide();
            }
        }
    });
	}else{
		$('.error').text("Some fields are empty");
	}
	});
});