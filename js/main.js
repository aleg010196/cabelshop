window.onload = function () {
    document.getElementById("menu").onclick = function () {
        var x = document.getElementById('myTopnav');
        if (x.className === "menu-block") {
            x.className += " responsive";
        } else {
            x.className = "menu-block";
        }
    }
};
//$(document).ready(function(){
//        $('#advantages1').hover(
//            function(){ $(this).addClass('wow fadeInUp') },
//            function(){ $(this).removeClass('wow fadeInUp') }
//);
//}