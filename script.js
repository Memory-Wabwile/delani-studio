//WHAT WE DO 
$(document).ready(function(){
    $("#design").click(function(){
        $("#about1").toggle();
        $("#hidden1").toggle();
    });
});

$(document).ready(function(){
    $("#development").click(function(){
        $("#about4").toggle();
        $("#hidden2").toggle();
    });
});

$(document).ready(function(){
    $("#management").click(function(){
        $("#about5").toggle();
        $("#hidden3").toggle();
    });
});

//end of WHAT WE DO


$('#darkicon').hover( function() {
    $(this).find('.title').fadeIn(300);
}, function() {
    $(this).find('.title').fadeOut(100);
});

$('#ontario').hover( function() {
    $(this).find('.title2').fadeIn(300);
}, function() {
    $(this).find('.title2').fadeOut(100);
});

$('#orange').hover( function() {
    $(this).find('.title3').fadeIn(300);
}, function() {
    $(this).find('.title3').fadeOut(100);
});

$('#carrey').hover( function() {
    $(this).find('.title4').fadeIn(300);
}, function() {
    $(this).find('.title4').fadeOut(100);
});

$('#goodday').hover( function() {
    $(this).find('.title5').fadeIn(300);
}, function() {
    $(this).find('.title5').fadeOut(100);
});

$('#buttons').hover( function() {
    $(this).find('.title6').fadeIn(300);
}, function() {
    $(this).find('.title6').fadeOut(100);
});

$('#burned').hover( function() {
    $(this).find('.title7').fadeIn(300);
}, function() {
    $(this).find('.title7').fadeOut(100);
});

$('#bailey').hover( function() {
    $(this).find('.title8').fadeIn(300);
}, function() {
    $(this).find('.title8').fadeOut(100);
});


//end of portfolio

//form validation

$("form").on("submit", function(e) {
    e.preventDefault();
            var name = $("#inputName").val()
    alert("Hello" +" "+ name + ",\nWe have received your message. "+ "\nThank you for contacting us at Delani Studio.")

    document.getElementById("#inputName").reset();
    document.getElementById("#inputEmail").reset();
    document.getElementById("#inputMessage").reset();
    
    });
    // form.addEventListener("submit" , function(e){
    //     e.preventDefault();
    //     document.form.inputName.value="";
    //     document.form.inputEmail.value="";
    //     document.form.inputMessage.value ="";
    // });
