/******************************************
project 1 - Random Quote Generator
******************************************/

/***
 * `quotes` array
 ***/
let quotes = [
    {
    quote:`We live in an age when pizza gets to your home before the police.`,
    source:"Jeff Arder",
    citation:"Internet",
    year: 1998,
    tag:"food"
    },
    {
    quote:`Hunger is a good cook.`,
    source:"Proverb",
    citation:"Web",
    year: null,
    tag:"food"
    },
    {
     quote:`The first law of dietetics seems to be if it tastes good, its bad for you.`,
     source:"Barbara Cartland",
     citation:"Books",
     year: 1993 ,
     tag:"food"
    },
    {
    quote:`It is a difficult matter to argue with the belly since it has no ears.`,
    source:"Cato The Elder",
    citation:null,
    year: null ,
    tag:"food" 
    },
    {
        quote:`	When a man's stomach is full it makes no difference whether he is rich or poor. `,
        source:"Euripides",
        citation:"Twitter",
        year: 2012 ,
        tag:"food"
    },
    {
        quote:`	One should eat to live, not live to eat.`,
        source:"Benjamin Franklin",
        citation:"Pinterest",
        year: null  ,
        tag:"food"
    },
    {
        quote:`Dream big and dare to fail `,
        source:"Norman Vaughan",
        citation:"Internet",
        year: 2004 ,
        tag:"success" 
    },
    {
        quote:` I never dreamed about success; I worked for it`,
        source:"Estee Lauder",
        citation:null,
        year: 1780,
        tag:"success" 
    },
    {
        quote:`Success is not final; failure is not fatal: It is the courage to continue that counts.`,
        source:"Vince Lombardi",
        citation:"Poster",
        year: 1989 ,
        tag:"success"
    },
    {
        quote:`The road to success and the road to failure are almost exactly the same `,
        source:"Colin R. Davis",
        citation:"The Book",
        year: 2000  ,
        tag:"success"
    }
    
    
    ]


//Get the elements
let quoteDisplay = document.querySelector('.quote');
let source = document.querySelector('.source');
let citation = document.querySelector('.citation');
let year = document.querySelector('.year');
let quoteBtn = document.querySelector('.load-quote');
let arrSuccess = quotes.filter(quote => (quote.tag === "success"));
let arrFood  = quotes.filter(quote => (quote.tag === "food"));
// console.log(arrSuccess);
// console.log(arrMotive);
/***
 * `getRandomQuote` function
 ***/
 clearInterval(myTimer);
function getRandomQuote(){
    let randomQuoteIndex= Math.floor(Math.random()* quotes.length);
   quoteDisplay.innerText = quotes[randomQuoteIndex].quote;
   source.innerText = quotes[randomQuoteIndex].source;
   citation.innerText = quotes[randomQuoteIndex].citation;
   year.textContent = quotes[randomQuoteIndex].year;
   
    source.innerText = `${source.innerText} , ${citation.innerText}, ${year.innerText}`;
   
   
//    console.log(quotes[randomQuoteIndex].quote);
}

function sucessQuote(){
    let randomSucess  = Math.floor(Math.random()* arrSuccess.length);
    quoteDisplay.innerText = arrSuccess[randomSucess].quote;
    source.innerText = arrSuccess[randomSucess].source;
    citation.innerText = arrSuccess[randomSucess].citation;
    year.textContent  = arrSuccess[randomSucess].year;
    if(citation || year){
        source.innerText = `${source.innerText}, ${citation.innerText}, ${year.innerText}`
    }
    
}

let successBtn = document.querySelector('.success-quote');
successBtn.addEventListener('click', function(){
    clearInterval(myTimer);
    sucessQuote();
    randColor();
   
})

function foodQuote(){
    let randFoodQuote = Math.floor(Math.random()*arrFood.length);
    quoteDisplay.innerText = arrFood[randFoodQuote].quote;
    source.innerText  = arrFood[randFoodQuote].source;
    citation.innerText = arrFood[randFoodQuote].citation;
    year.innerText  = arrFood[randFoodQuote].year;
    source.innerText = `${source.innerText}, ${citation.innerText}, ${year.innerText}`
    
}
let foodBtn  = document.querySelector('.food-quote');
foodBtn.addEventListener('click', function(){
    clearInterval(myTimer);
    foodQuote();
    randColor();
    
})

/***
 * `printQuote` function
 ***/

 function printQuote(){
getRandomQuote();

 }

/***
 * click event listener for the print quote button
 ***/
quoteBtn.addEventListener('click',function(e){
    e.preventDefault();
    printQuote();
    randColor();
})


//copy to clipboard function
function copyClipboard() {
    var copyText = document.querySelector(".quote");  // get the txt area
    navigator.clipboard.writeText(copyText.innerHTML); // copy the text into clipboard
    alert("Copied : " + copyText.innerHTML); //alert 
  }

// add click event for copy to clipboard
let copy = document.querySelector('#copy');
copy.addEventListener('click',function(e){
    e.preventDefault();
    copyClipboard();
    //console.log('clicked copy');
})

var myTimer
 //function for set intevel for auto quote using button's click event
let autoButton = document.getElementById('auto-quote');
autoButton.addEventListener('click',function(e){
     myTimer = setInterval(function(){
        printQuote();
        randColor();
    
    }, 2000);
    
})

//function for random color generator
function randColor(){
    const colors = [   //an array of colors
        '#2C3E50',
        '#072227',
        '#1A1A40',
        '#470D21',
        '#1A374D',
        '#041C32',
        '#064663',
        '#781D42',
        '#22577E',
        '#064635',
    ]
    let body = document.querySelector('body'); 
    
    const bg = colors[Math.floor(Math.random() * colors.length)]; //random color pick
    body.style.background = bg;   //assign the random color into background
}
