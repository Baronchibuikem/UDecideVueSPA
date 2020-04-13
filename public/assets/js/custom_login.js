 $(document).ready(function()
    {
        $('#submit').dblclick(function(e)
        { 
            e.preventDefault();
        });

        
        $("#form_login").submit(function(e) 
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
	alert('about to call server');
	// Send data to the server
	$.ajax({
		url:'http://localhost/youdecide/ajax-login',
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
					alert('success');
					// Redirect to login page
					var redirect_url = response.redirect_url;
					window.location.href = redirect_url;
				}
		}
	});
						
	}

