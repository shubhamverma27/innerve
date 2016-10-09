
var polyline = document.querySelector('#e');
var polylineLength = polyline.getTotalLength();

console.log(polylineLength);

var a = $('#a');
var b = $('#b');
var c = $('#c');
var d = $('#d');
var e = $('#e');
var f = $('#outer-circle');

var el = $('#fingerprint');

el.click(function() {
  a.toggleClass('active');
  b.toggleClass('active');
  c.toggleClass('active');
  d.toggleClass('active');
  e.toggleClass('active');
})

function loader(){
   setTimeout(function(){ 
        document.getElementById("loader").className=("animated slideOutUp");
   }, 3000);};
function setaction(){
  var linkaction=document.getElementById("hostid").value;
  document.getElementById('form').action=linkaction;
}
function check()
{
    setaction();
    var u=document.getElementById("user").value;
    var p=document.getElementById("pass").value;

 if(u == "name" && p == "pass")
  {
    abc();
  }
 else
 {
   alert("Error in Password or Username")
  }
};


function abc(){
    document.getElementById("value").style.display="block";
}


function link1(){
    document.getElementById('inside2').className="animated slideOutLeft";
    document.getElementById('inside3').className="animated slideOutLeft";
    document.getElementById('inside4').className="animated slideOutLeft";
    document.getElementById('inside1').className="animated slideInRight";
    document.getElementById('inside1').style.display="block";
    
}
function link2(){
    document.getElementById('inside1').className="animated slideOutLeft";
    document.getElementById('inside3').className="animated slideOutLeft";
    document.getElementById('inside4').className="animated slideOutLeft";
    document.getElementById('inside2').className="animated slideInRight";
    document.getElementById('inside2').style.display="block";
}
function link3(){
    document.getElementById('inside1').className="animated slideOutLeft";
    document.getElementById('inside2').className="animated slideOutLeft";
    document.getElementById('inside4').className="animated slideOutLeft";
    document.getElementById('inside3').className="animated slideInRight";
    document.getElementById('inside3').style.display="block";
}
function link4(){
    document.getElementById('inside1').className="animated slideOutLeft";
    document.getElementById('inside2').className="animated slideOutLeft";
    document.getElementById('inside3').className="animated slideOutLeft";
    document.getElementById('inside4').className="animated slideInRight";
    document.getElementById('inside4').style.display="block";
}
