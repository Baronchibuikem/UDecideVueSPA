 $(document).ready(function()
    {
        jQuery('#submit').dblclick(function(e)
        { 
            e.preventDefault();
        });

        
        $("#loginform").submit(function(e) 
        {
                var $form = $(this);
                e.preventDefault();
                //call send server request  
                sendServerRequest();
                return false;
        });


    });



function sendServerRequest()
 {			
			
	// Send data to the server
	$.ajax({
		url:'http://localhost/youdecide/ajax-register',
		method: 'POST',
		dataType: 'json',
		data: {
			email: $("input#email").val(),
			password: $("input#password").val(),
		},
		error: function()
		{
			alert("An error occoured!");
		},
		success: function(response)
		{
			// Login status [success|invalid]
			var login_status = response.login_status;
			// If login is invalid, we store the 
				if(login_status == 'invalid')
				{
					alert(login_status);
				}
				if(login_status == 'success')
				{
					// Redirect to login page
					var redirect_url = response.redirect_url;
					window.location.href = redirect_url;
				}
		}
	});
						
	}

