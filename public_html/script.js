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
     
     $('h1').bind('click', mouseClick);
     
     
});


function mouseOverMe(){
    $("h1").html("Nick is really cool");
}

function mouseOutMe(){
    $('h1').html('Nick is pretty cool');
}

