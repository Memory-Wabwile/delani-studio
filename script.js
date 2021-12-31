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

//PORTFOLIO
$(document).ready(function(){
    $("#darkicon").hover(function(){
        $("#title").show();
    });
});
//end of portfolio

//form validation
var form
$("form").on("submit", function(e) {
    e.preventDefault();
            var name = $("#inputName").val()
    alert("Hello" +" "+ name + ",\nWe have received your message. "+ "\nThank you for contacting us at Delani Studio.")

    form.addEventListener("submit" , function(e){
        e.preventDefault();
        document.form.inputName.value="";
        document.form.inputEmail.value="";
        document.form.inputMessage.value ="";
    })
    
    });