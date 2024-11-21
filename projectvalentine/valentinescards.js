$(document).ready(function(){
    var cardIsOut = false;

    $(".container").mouseenter(function(){
        $(".card").stop().animate({
            top: "-90px"
        }, "slow");
        cardIsOut = true;
        if (cardIsOut) {
            $(".hearts div").addClass("animateHearts");
        }
    }).mouseleave(function(){
        $(".card").stop().animate({
            top: "0"
        }, "slow");
        cardIsOut = false;
        if (!cardIsOut) {
            $(".hearts div").removeClass("animateHearts");
        }
    });
});
