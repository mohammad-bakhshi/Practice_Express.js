const username=$('#username').val();

const password=$('#password').val();

const user={
    "username":username,
    "password":password
}

$('#login').click(function () { 
    $.post( 'localhost:8000/user/login', user );
});