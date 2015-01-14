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


function mouseOverMe(){
    $("h1").html("Nick is really cool");
}

function mouseOutMe(){
    $('h1').html('Nick is pretty cool');
}

function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
    $('#randPara').append('<p>ADDED</p>');
}

function replaceWText(){
    $('#replaceWText').text('Replaced!');
}

function hideThePage(){
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
    }
    
function showThePage(){
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}

function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
    $('#randPara').append('<p>ADDED</p>');
}