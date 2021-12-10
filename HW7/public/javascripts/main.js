$(document).ready(function () {
    

  $("#login").click(function () {
      if ($('#username').val()===''||$('#password').val()==='') {
          alert('username or password is empty');
      }
      else{
        let data={
            username:$('#username').val(),
            password:$('#password').val()
          }
        $.ajax({
            type: "POST",
            url: "/user/send",
            contentType: "application/json",
            data:JSON.stringify(data),
            success: function(response) {
                if (response==='pass') {
                    alert('pass');
                }
                else{
                    alert('fail');
                }
            },
            error:function(err)
            {
                console.log(err);
            }
        });
      }
  });
});

