/******************************************
project 1 - Random Quote Generator
******************************************/
console.log('js located')
/***
 * `quotes` array*
 ***/
 const quotes = [ 

{
    quote: `“Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.”`,
    source: `Rumi`,
    citation: 'twitter',
    year: 2011
},
{
    quote:
   ` “Out beyond ideas of wrongdoing
    and rightdoing there is a field.
    I'll meet you there.
    
    When the soul lies down in that grass
    the world is too full to talk about.”
    ― Rumi`,

    source: `Rumi`,
    citation: 'twitter',
    year:null
},
{
   quote: ` “What can my enemies do to me? My paradise is in my heart, it is with me wherever I go. To imprison me is to provide me with seclusion. To send me into exile is to send me away in the Path of Allah. And to kill me is to make me a martyr.”`,

   source:  `— Ibn Taymiyyah`,
    citation: 'twitter',
    year: null
    
},
{
    quote: ` “A calamity that makes you turn to Allah is better for you then a blessing which makes you forget the remembrance of Allah.”`,

    source: `— Ibn Taymiyyah`,
    citation: null,
    year: 789
},
{
    quote: ` “What can you do with me? My jannah is in my heart! If you take me to jail, I will make zikr of Allah. If you exile me out of my land, I will make takaffur. If you execute me, I would be a shaheed. What can you do with me? Because I am not limited to this dunya. I am living for al-akhira!”`,

    source: `— Ibn Taymiyyah`,
    citation: 'twitter.com/',
    year: null
},
{
    quote: ` “We were the most humiliated people on earth and Allah gave us honour through Islam. If we ever seek honour through anything else, Allah will humiliate us again.” `,

    source: `― Umar ibn Al-Khattab`,
    citation: 'https://www.goodreads.com/',
    year: null
},
{
    quote: `“No amount of worrying can change the future. Go easy on yourself, for the outcome of all affairs is determined by God's decree. If something is meant to go elsewhere, it will never come your way, but if it is yours by destiny, from you it cannot flee.” `,

    source: `― Umar ibn Al-Khattab`,
    citation: 'https://www.goodreads.com/',
    year: null
},
{
    quote: `“How wonderful is the situation of a believer. There is good for him in everything and this applies only to a believer. If prosperity comes to him, he expresses gratitude to God and that is good for him; and if adversity befalls him, he endures it patiently and that is better for him.” `,

    source: `― Prophet Muhammad (PBUH)`,
    citation: 'https://www.goodreads.com/',
    year: null,
    tag: "motivational"
},
{
    quote: `“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”  `,

    source: `– Martin Fowler`,
    citation: 'https://www.goodreads.com/',
    year: 2018
},
{
    quote: `“Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning.”  `,

    source: `– Rick Cook`,
    citation:'https://www.goodreads.com/',
    year: 2019
}
 ]

 //Capturing DOM Element

const loadQuote = document.querySelector('#load-quote');
const quoteContainer = document.querySelector('.container');
const randomQuote = document.querySelector('.quote');
const source = document.querySelector('.source');
const year = document.querySelector('.year')
const citation = document.querySelector('.citation')
const body = document.querySelector('body')
const quoteBox = document.querySelector('.quote-box')


/***
 * `getRandomQuote` function
 ***/

 function getRandomQuote() {
    let index = Math.floor(Math.random() * quotes.length); 
    randomQuote.innerHTML = quotes[index].quote;
    source.innerHTML = quotes[index].source;
    year.textContent = quotes[index].year;
    citation.textContent = quotes[index].citation;
    if(year || citation) {
        source.innerHTML =` ${source.innerHTML}, ${year.textContent} ${citation.textContent}`;
}
}
  

/***
 * `printQuote` function
 ***/
function printQuote(){
    getRandomQuote()
    
}
//function for get rendom color

function  changeColor(){
    const color = Math.floor(Math.random()*123456).toString(16);
    body.style.backgroundColor = "#" + color;
    quoteBox.style.backgroundColor = "#" + color;
    loadQuote.style.backgroundColor = "#" + color;

  }


      
/***
 * click event listener for the print quote button
 ***/
 loadQuote.addEventListener('click', function(){
    changeColor()
     printQuote()
 });

 //function for set intevel

setInterval(function(){
    changeColor()
    printQuote()

}, 5000);
 
 //function for random color change

//  let i = 0;
// function change() {
//   let color = ["black", "blue", "brown", "green"];
//   quoteBoxCss.style.backgroundColor = color[i];
//   i = (i + 1) % color.length;
// }


 
  
  
  
  
  
    // setInterval(function(){
    // quoteBoxCss.innerHTML = getRandColor();
    // },5000)
   


    // // alternative for random color
    // function getRandomColor() {
    //   var letters = '0123456789ABCDEF';
    //   var color = '#';
    //   for (var i = 0; i < 6; i++) {
    //     color += letters[Math.floor(Math.random() * 16)];
    //   }
    //   return color;
    // }
    
    // function getRandomInt(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    
    // function setRandomColor() {
    //   quoteBoxCss.style.backgroundColor = getRandomColor;
    // }
    
    // function setRandomClass() {
    //     let randomStyleNumber = getRandomInt(1, 20);
    //     quoteBoxCss.style.backgroundColor = randomStyleNumber;
    // }
    
    // function stylize() {
    //     setRandomClass();
    //     setRandomColor();
    // }
