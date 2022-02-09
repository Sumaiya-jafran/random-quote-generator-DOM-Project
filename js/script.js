/******************************************
project 1 - Random Quote Generator
******************************************/

/***
 * `quotes` array
 ***/
let quotes = [
    {
    quote:`It is better to fail in originality than to succeed in imitation.`,
    source:"Herman Melville",
    citation:"Internet",
    year: 1998,
    tag:"motivational"
    },
    {
    quote:`The secret of getting ahead is getting started`,
    source:"Mark Twain",
    citation:"Web",
    year: 1987,
    tag:"motivational"
    },
    {
     quote:` The only impossible journey is the one you never begin`,
     source:"Tony Robbins",
     citation:"Books",
     year: 1993 ,
     tag:"motivational"
    },
    {
    quote:`The best way to get started is to quit talking and begin doing`,
    source:"Walt Disney",
    citation:"Goolge",
    year: 2019 ,
    tag:"motivational" 
    },
    {
        quote:`Don’t be afraid to give up the good for the great `,
        source:"John D. Rockefeller",
        citation:"Twitter",
        year: 2012 ,
        tag:"Prophet"
    },
    {
        quote:`We generate fears while we sit. We overcome them by action`,
        source:"Dr. Henry Link",
        citation:"Pinterest",
        year: 2008  ,
        tag:"Prophet"
    },
    {
        quote:`Dream big and dare to fail `,
        source:"Norman Vaughan",
        citation:"Internet",
        year: 2004 ,
        tag:"Prophet" 
    },
    {
        quote:` I never dreamed about success; I worked for it`,
        source:"Estee Lauder",
        citation:"Internet",
        year: 1780,
        tag:"Prophet" 
    },
    {
        quote:`It’s not whether you get knocked down, it’s whether you get up`,
        source:"Vince Lombardi",
        citation:"Poster",
        year: 1989 ,
        tag:"Prophet"
    },
    {
        quote:`It’s during our darkest moments that we must focus to see the light `,
        source:"Aristotle",
        citation:"The Book",
        year: 2000  ,
        tag:"Prophet"
    }
    
    
    ]

//Get the elements
let quoteDisplay = document.querySelector('.quote');
let source = document.querySelector('.source');
let citation = document.querySelector('.citation');
let year = document.querySelector('.year');
let quoteBtn = document.querySelector('.load-quote');

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote(){
    let randomQuoteIndex= Math.floor(Math.random()* quotes.length);
   quoteDisplay.innerText = quotes[randomQuoteIndex].quote;
   source.innerText = quotes[randomQuoteIndex].source;
   citation.innerText = quotes[randomQuoteIndex].citation;
   year.textContent = quotes[randomQuoteIndex].year;
   source.innerText = `${source.innerText} , ${citation.innerText}, ${year.innerText}`
//    console.log(quotes[randomQuoteIndex].quote);
}



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


 //function for set intevel for auto quote using button's click event
let autoButton = document.getElementById('auto-quote');
autoButton.addEventListener('click',function(e){
    setInterval(function(){
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
