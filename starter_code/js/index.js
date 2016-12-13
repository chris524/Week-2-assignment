$( document ).ready(function() {
    $(".readmore a").click(expandMore);
    function expandMore(){
        event.preventDefault();
        $("#show-this-on-click").slideDown();
        $(".readless").show();
        $(".readmore").hide();
    }
    $(".readless a").click(showLess);
    function showLess(){
        event.preventDefault();
        $("#show-this-on-click").slideUp();
        $(".readless").hide();
        $(".readmore").show();
    }
    $("a.learnmore").click(learnMore);
    function learnMore(){
        event.preventDefault();
        $("#learnmoretext").slideDown();
        $(".learnmore").hide();
    }
});