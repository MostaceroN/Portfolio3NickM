/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
<html>


        
        $("document").ready(function() {
    $(".nick").css("background-color", "green");
    $("body").css("background-color", "green");
    $("h1").css({"background-color": "blue", "color": "white"});
    $("p:lt(3)").css({"background-color": "white", "color": "white"});
    $("p:gt(2)").css({"background-color": "white", "color": "maroon"});
    $("h1").bind("mouseover", mouseOverMe).bind("mouseout", mouseOutMe);
    $("h1").bind("click", mouseClick);
    $(".col-xs-3").css("background-color", "black");
    //alot of confusing code that doesn't look self explainable//
    
    $("#replaceWText").bind("click", replaceWText);
    
    $("#randPara").bind("click", addAPara);

    $("#removePara").bind("click", removeAPara);
            //learned all of this coding via videos on youtube//
    
    
    $("#show").css("visibility", "hidden");
    
    $("#hide").bind("click", hideThePage);
    
    $("#show").bind("click", showThePage);
    
    //words like visibility and hidden help us see and hide the page//


    
    $("#superHumans").accordion({header: "h2"});
    $("#superHumans").css("width", "400px");
    //sizes the font and other things on the site//
    
    $("h2").css("background", "cyan");
    
});


function mouseOverMe() {
    $("h1").html("");
    
    //changes the text when i go over it//
}

function mouseOutMe() {
    $("h1").html("");
}

function mouseClick() {
    $("h1").html("");
}


//1) Add, 2) Remove, and 3) Change HTML Elements using JQuery//

function removeAPara(){
    $("#randPara p:last").remove();
}

function addAPara(){
    $("#randPara").append("<p></p>");
}

function replaceWText(){
    $("#replaceWText").text("");
}

//shows my page and also hides it//



function hideThePage(){
    $("#show").css("visibility", "visible");
    $("div").hide("slide", {}, 2500);
    $("#show").show("fold", {}, 2500);
    
    //different sizes//
}
   
function showThePage(){
    $("div").show("fold", {}, 2500);
    $("#show").hide("puff", {}, 2500);
    
    //2500 is a common number//
}

</html>