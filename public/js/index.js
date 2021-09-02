// import { LeaderLine } from './leader-line.min.js';

var width = $(window).width(); 
window.onscroll = function(){
    if ((width >= 720)){
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $("#header").css("background","#fff");
            $("#header").css("color","#000");
            $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
            $("#header").css("padding","4vh 4vw");
            $("#navigation a").hover(function(){
                $(this).css("border-bottom","2px solid rgb(255, 44, 90)");
            },function(){
                $(this).css("border-bottom","2px solid transparent");
            });
        }else{
            $("#header").css("background","transparent");
            $("#header").css("color","#fff");
            $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
            $("#header").css("padding","6vh 4vw");
            $("#navigation a").hover(function(){
                $(this).css("border-bottom","2px solid #fff");
            },function(){
                $(this).css("border-bottom","2px solid transparent");
            });
        }
    }
    else{
        if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            $("#header").css("background","#fff");
            $("#header").css("color","#000");
            $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
            $("#header").css("padding","4vh 4vw");
            $("#navigation a").hover(function(){
                $(this).css("border-bottom","2px solid rgb(255, 44, 90)");
            },function(){
                $(this).css("border-bottom","2px solid transparent");
            });
        }else{
            $("#header").css("background","transparent");
            $("#header").css("color","#fff");
            $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
            $("#header").css("padding","6vh 4vw");
            $("#navigation a").hover(function(){
                $(this).css("border-bottom","2px solid #fff");
            },function(){
                $(this).css("border-bottom","2px solid transparent");
            });
        }
    }
}

function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },800);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1650);

function contact(event) {
    // Prevent Default Form Submission
    event.preventDefault(); 
    console.log("Launching external application for email");

    reqForm = document.forms.Email_form;

    console.log(reqForm.elements.length);

    kvpairs_json = {};
    
    // data = new FormData();

    for (var i = 0; i < reqForm.elements.length; i++){
        var e = reqForm.elements[i];
        console.log(e);
        var fieldName = e.name;
        var fieldValue = e.value;
        kvpairs_json[fieldName] = fieldValue;
        console.log(fieldName, fieldValue);
    }

    console.log(JSON.stringify(kvpairs_json));

    var messageBody = "Email from Website : %0D%0A";
    messageBody += kvpairs_json.contacter_name + " has sent a message about : %0D%0A";
    messageBody += kvpairs_json.contacter_message + "%0D%0A";
    messageBody += "Raw Message : %0D%0A";
    messageBody += JSON.stringify(kvpairs_json);

    window.location.href = 
        'mailto:tabbas97@gmail.com&subject=' + 
        'Email - Website from : ' + kvpairs_json.contacter_name +
        '&body=' + messageBody
        ;
    
    return;
}

// var form = document.getElementById("Email_form")[0];
// form.addEventListener('click',contact);
var SendButton = document.getElementById("Email_send");
SendButton.addEventListener('click',contact);


$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1800, function(){
        window.location.hash = hash;
       });
       } 
      });
  });

// new LeaderLine(
    // document.getElementById('d1'),
    // document.getElementById('d2')
// );

  