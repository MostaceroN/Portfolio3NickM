/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){
     $('.nicksclass').css('background-color', 'yellow');
     
     $('.2').css({'visibility': 'hidden', 'position': 'absolute'});
     
     $('div:last p:nth-child(3)').css('background-color', 'pink');
     
     $('p:last').css('color', 'red');
     
     $('p:gt(4)').css('border-style', 'solid');
     
     $('p:first').css({'background-color':'cyan', 'color': 'white'});
     
     $("h1").bind('mousecover', mouseOverMe).bind('mouseout', mouseOutMe);
     
     $('h1').bind('click', mouseClick);
     
     $('#replaceWText').bind('click', replaceWText);
     
     $('#randPara').bind('click', addAPara);
     
     $('removePara').bind('click', removeAPara);
     
     
});


$("#replaceWText").bind("click", replaceWText);
    
    $("#randPara").bind("click", addAPara);

    $("#removePara").bind("click", removeAPara);
    
    
    $("#show").css("visibility", "hidden");
    
    $("#hide").bind("click", hideThePage);
    
    $("#show").bind("click", showThePage);


    
    $("#superHumans").accordion({header: "h2"});
    $("#superHumans").css("width", "400px");
    
    $("h2").css("background", "cyan");
    
});

//////changes the ttext when mouse hovers over it////
function mouseOverMe() {
    $("h1").html("GREATEST OF ALL TIME");
}

function mouseOutMe() {
    $("h1").html("LEBRON JAMES");
}

function mouseClick() {
    $("h1").html("CLUTCH");
}


////1) Add, 2) Remove, and 3) Change HTML Elements using JQuery////

function removeAPara(){
    $("#randPara p:last").remove();
}

function addAPara(){
    $("#randPara").append("<p>ADDED</p>");
}

function replaceWText(){
    $("#replaceWText").text("Never Replaced!");
}



////hiding and showing my page////

function hideThePage(){
    $("#show").css("visibility", "visible");
    $("div").hide("slide", {}, 2500);
    $("#show").show("fold", {}, 2500);
}
   
function showThePage(){
    $("div").show("fold", {}, 2500);
    $("#show").hide("puff", {}, 2500);
}