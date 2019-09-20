//display login popup on click
function displayLogin(){
    $('#login-button').submit(function(event){
        event.preventDefault();
        $('#login-form').fadeIn();
    });
}

//display issue popup on click
function displayIssue(){
    $('#add-issue').click(function(event){
        event.preventDefault();
        $('#issue-form').fadeIn();
    });
}

//close the login or issue popup when user presses 'x'
function closePopup(){
    $('.close').click(function(event){
        $(this).parent().fadeOut();
    });
}

//close the login or issue popup when user presses cancel
function cancelPopup(){
    $('.cancel-button').click(function(event){
        event.preventDefault();
        $(this).parent().fadeOut();
    });
}

//callvack function for when the page loads
function handleApp(){
    displayLogin();
    displayIssue();
    closePopup();
    cancelPopup();
}

//when the page loads, call the callback function
$(handleApp);