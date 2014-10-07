$(document).ready(function(){

    $("#aboutb").click(aboutButton);
    $("#projectsb").click(projectButton);
    $("#homeb").click(homeButton);

});

function aboutButton(){
        $("#home").css("display","none");
        $("#projects").css("display","none");
        $("#about").css("display","block")
}
function projectButton(){
        $("#home").css("display","none");
        $("#projects").css("display","block");
        $("#about").css("display","none")
}
function homeButton(){
        $("#home").css("display","block");
        $("#projects").css("display","none");
        $("#about").css("display","none")
}