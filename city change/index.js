//we need an input element, id, value
//we will need a button
//  on button click, run a function to change the background
// based on the input
$(document).ready(function(){

    $("#submit-btn").change(changeBackground);
    function changeBackground(){
    //define function that runs whent the button is clicked
        //get city name input from input element
        var cityInput = $("#city-type").val();
        
        //San Fran
        if(cityInput == "san francisco" || cityInput == "sf" || cityInput == "bay city"){
            $('body').css("images.sf.jpg");
            //if city input is SF, make background sf.jpg
        }
        
        //Austin
        else if ( cityInput == "austin" || cityInput == "atx"){
            $('body').css("images.austin.jpg");
        
            //if city input is Austin, make background austin.jpg
        }
        
        //NYC
        else if( cityInput == "new york" || cityInput == "new york city" || cityInput == "nyc"){
            $('body').css("images.nyc.jpg");
            //if city input is NYC, make background NYC.jpg
        
        }
        //LA
        else if( cityInput == "los angeles" || cityInput == "la" || cityInput == "lax"){
            $('body').css("images.la.jpg");
        //if city input is LA, make background LA.jpg
        }
    
        //Sydney
        else if( cityInput == "sydney" || cityInput == "syd" ){
            $('body').css("images.sydney.jpg");
        //if city input is Sydney, make background sydney.jpg
        }
    };
});