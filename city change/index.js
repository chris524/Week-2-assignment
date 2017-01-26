//we need an input element, id, value
//we will need a button
//  on button click, run a function to change the background
// based on the input
$(document).ready(function(){

    $("#submit-btn").click(changeBackground);
    function changeBackground(){
        event.preventDefault();
    //define function that runs whent the button is clicked
        //get city name input from input element
        var cityInput = $("#city-type").val();
        //San Fran
        if(cityInput == "san francisco" || cityInput == "sf" || cityInput == "bay city"){
            $('body').css("background-image",'url(images/sf.jpg)');
            //if city input is SF, make background sf.jpg
        }
        
        //Austin
        else if ( cityInput == "austin" || cityInput == "atx"){
            $('body').css("background-image",'url(images/austin.jpg)');
        
            //if city input is Austin, make background austin.jpg
        }
        
        //NYC
        else if( cityInput == "new york" || cityInput == "new york city" || cityInput == "nyc"){
            $('body').css("background-image",'url(images/nyc.jpg)');
            //if city input is NYC, make background NYC.jpg
        
        }
        //LA
        else if( cityInput == "los angeles" || cityInput == "la" || cityInput == "lax"){
            $('body').css("background-image",'url(images/la.jpg)');
        //if city input is LA, make background LA.jpg
        }
    
        //Sydney
        else if( cityInput == "sydney" || cityInput == "syd" ){
            $('body').css("background-image",'url(images/sydney.jpg")');
        //if city input is Sydney, make background sydney.jpg
        }
    };
});