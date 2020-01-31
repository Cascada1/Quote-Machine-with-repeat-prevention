
$(document).ready(function() {
  
(function(){
  

 

  /* Quotes are selected randomly.  Each used quote is then put in usedQuotes[] so it is seen only once.  The next quote is then randomly selected from the remaining quotes. */ 
  
  var array = [];
  var sub = [];
  var back = [];
  var pp=-1;
  var usedQuotes = [];
  
// randomQuote() was invoked onclick from QUOTES button now 325
function randomQuote() {
  
  var i = Math.floor(Math.random() * (101 - 0 + 1)) + 0;
  // Selects i randomly and will be used to select quote and author
  backchange();
  // backchange() used to select background image
  function backchange(){
   
    pp++;
  // pp used to select back[] array index to display background images 
    // if pp>18 reset pp=0 
    if(pp>18){pp=0;}
    
  // load image array back[]
  back[0]="url('http://images.fineartamerica.com/images-medium-large-5/great-smoky-mountains-national-park-nc-western-north-carolina-dave-allen.jpg')"
    // North Carolina hills - [0]
  back[1]="url('https://s-media-cache-ak0.pinimg.com/736x/4f/ce/da/4fceda14ca9e010733e927492a929af9.jpg')" 
    // Large wave - [1]
  back[2]="url('http://www.muzirisheritage.org/images/Kottakkavu-church-L.jpg')"
    // Church - [2]
  back[3]="url('https://www.eugene-or.gov/ImageRepository/Document?documentID=23417')"
    // Old parade photo - [3]
  back[4]="url('https://ei.marketwatch.com/Multimedia/2018/07/30/Photos/ZH/MW-GN442_Bear07_20180730170800_ZH.jpg?uuid=a4100f18-943c-11e8-b051-ac162d7bc1f7')"
    // Marketwatch Bear - [4]
  back[5]="url('https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&h=350')"
    // Rocky Mountains - [5]
  back[6]="url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQqBmHZKkcd_HtXR_eSyP-L-938hYu-A2MtV8LROFqW4w5ZYMHUPg')"
    // Flowers - [6]
  back[7]="url('https://i.ytimg.com/vi/Q2-0w0YrsfA/maxresdefault.jpg')"
    // Ocean sunset - [7]
  back[8]="url('https://dsx.weather.com//util/image/w/4e9f0688-a8de-487b-bbf2-9f76e81abb72.jpg?v=ap&w=980&h=551&api=7db9fe61-7414-47b5-9871-e17d87b8b6a0')"
    // After storm photo - [8]
  back[9]="url('http://www.oneoceanexpeditions.com/assets/home/gallery/oo-antarctica-01.jpg')"
    // Antarctica - [9]
  back[10]="url('https://c1.staticflickr.com/4/3839/14470615910_b97ab94a3a_b.jpg')"
    // Old car and trailer - [10]
  back[11]="url('https://burst.shopifycdn.com/photos/iris-bathed-in-light_373x.jpg')" 
    // Iris photo - [11]
  back[12]="url('https://burst.shopifycdn.com/photos/campfire_373x.jpg')"  
    // campfire - [12]
  back[13]="url('https://ei.marketwatch.com/Multimedia/2018/02/06/Photos/MG/MW-GD114_bear_n_20180206063741_MG.jpg?uuid=23fd810e-0b32-11e8-ab1d-9c8e992d421e')"
    // bear - [13]
  back[14]="url('http://www.hickerphoto.com/images/1024/endangered-animal-list_5406.jpg')"
    // Endangered animal - [14]
  back[15]="url('http://agapecoc.com/wp-content/uploads/2015/03/Empty-Church.jpg')"
    // Church - [15]
  back[16]="url('https://cdn.shopify.com/s/files/1/0603/4549/files/sheet-market-fall-destination-locations-blog.jpg?1683')"
    // Fall leaves - [16]
  back[17]="url('https://c1.staticflickr.com/8/7679/16946881898_02ef20066f_n.jpg')" 
    // Stream with moss - [17]
  back[18]="url('https://s-media-cache-ak0.pinimg.com/originals/26/86/d4/2686d46af02fd9578ec6ed70151b7bd7.jpg')" 
    // Ocean waves with moon - [18]
    
  
    
    //Here is where background is changed
    // if statements will apply a specific background image to a given quote.  (i is random quote, pp is back[] image)
    if (i==1){pp=0;} if (i==10){pp=8;} if (i==38){pp=18;} if (i==50){pp=8;} if (i==57){pp=10;} if (i==68){pp=18;}
    if (i==76){pp=10;} if (i==78){pp=10;} if (i==92){pp=10;} if (i==44){pp=5;}
    
    document.body.style.backgroundImage=back[pp];
    
    // check colors by pp value
   if(pp<8 && pp!==4){ document.getElementById("b1").style.color="black";document.getElementById("c1").style.color="black";$('h1').hide();
            document.getElementById("b1").style.marginTop="70px";document.getElementById("a1").style.backgroundColor="";
           }
   if(pp>=8 || pp===4){ document.getElementById("b1").style.color="white";document.getElementById("c1").style.color="white";
              document.getElementById("a1").style.backgroundColor="rgba(100,80,180,0.1)";
              $('h1').hide();
            }
  }   // End of functon backchange()
  
  // array[] holds quotes.  \ escapes " so can be shown on quote string
  array[0] = "\"If you don't know where you are going, you might wind up someplace else.\""
  array[1] = "\"After climbing a great hill, one only finds there are many more hills to climb.\""
  array[2] = "\"It is better to remain silent at the risk of being thought a fool, than to speak and remove all doubt.\""
  array[3] = "\"We've all heard a million monkeys banging on a million typewriters will eventually reproduce the entire works of Shakespeare.  Now, thanks to the Internet, we know this is not true.\""
  array[4] = "\"Every truth passes through three stages before it is recognized.  In the first, it is ridiculed.  In the second, it is opposed.  In the third, it is regarded as self-evident.\""
  array[5] = "\"When you come to a fork in the road, take it.\""
  array[6] = "\"Always go to other people's funerals, otherwise they won't come to yours.\""
  array[7] = "\"I, at any rate, am convinced God does not throw dice.\""
  array[8] = "\"Worry is like a rocking chair, it will give you something to do, but it won't get you anywhere.\""
  array[9] = "\"The trouble with eating Italian food is five or six days later, you are hungry again.\""
  array[10] = "\"Beware the Military-Industrial Complex.\""
  array[11] = "\"The final proof of greatness lies in being able to endure criticism without resentment.\""
  array[12] = "\"I can't change the direction of the wind, but I can adjust my sails to always reach my destination.\""
  array[13] = "\"Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.\""
  array[14] = "\"Perfection is not attainable, but if we chase perfection we can catch excellence.\""
  array[15] = "\"We know what we are, but we know not what we may be.\""
  array[16] = "\"We are all here on earth to help others; what on earth the others are here for I don't know.\""
  array[17] = "\"A professor is someone who talks in someone else's sleep.\""
  array[18] = "\"What the mass media offers is not popular art, but entertainment which is intended to be consumed like food, forgotten, and replaced by a new dish.\""
  array[19] = "\"Learn from your dreams what you lack.\""
  array[20] = "\"Good can imagine Evil; but Evil cannot imagine Good.\""
  array[21] = "\"To save your world you asked this man to die; would this man, could he see you now, ask why?\""
  array[22] = "\"Some books are undeservedly forgotten; none are undeservedly remembered.\""
  array[23] = "\"All that we are not stares back at what we are.\""
  array[24] = "\"Opportunity is missed by most people because it is dressed in overalls and looks like work.\"" 
  array[25] = "\"Fame often makes a writer vain, but seldom makes him proud.\""
  array[26] = "\"Love all, trust a few, do wrong to none.\""
  array[27] = "\"Better three hours too soon than a minute too late.\""
  array[28] = "\"A fool thinks himself to be wise, but a wise man knows himself to be a fool.\""
  array[29] = "\"Ignorance is the curse of God; knowledge is the wing wherewith we fly to heaven.\""
  array[30] = "\"Good night, good night! Parting is such sweet sorrow, that I shall say good night till it be morrow.\""
  array[31] = "\"Some are born great, some achieve greatness, and some have greatness thrust upon them.\""
  array[32] = "\"All the world's a stage, and all the men and women merely players: they have their exits and their entrances; and one man in his time plays many parts, his acts being seven ages.\""
  array[33] = "\"No legacy is so rich as honesty.\""
  array[34] = "\"Brevity is the soul of wit.\""
  array[35] = "\"God has given you one face, and you make yourself another.\""
  array[36] = "\"Love looks not with the eyes, but with the mind, And therefore is winged Cupid painted blind.\""
  array[37] = "\"Cowards die many times before their deaths; the valiant never taste of death but once.\""
  array[38] = "\"Like as the waves make towards the pebbl'd shore, so do our minutes, hasten to their end.\""
  array[39] = "\"Better a witty fool than a foolish wit.\""
  array[40] = "\"With mirth and laughter let old wrinkles come.\""
  array[41] = "\"To be, or not to be, that is the question.\""
  array[42] = "\"How far that little candle throws its beams! So shines a good deed in a naughty world.\""
  array[43] = "\"To thine own self be true, and it must follow, as the night the day, thou canst not then be false to any man.\""
  array[44] = "\"Our peace shall stand as firm as rocky mountains.\""
  array[45] = "\"What is past is prologue.\""
  array[46] = "\"Reputation is an idle and most false imposition; oft got without merit, and lost without deserving.\""
  array[47] = "\"The man who does not read has no advantage over the man who cannot read.\""
  array[48] = "\"Now is the winter of our discontent.\""
  array[49] = "\"Uneasy lies the head that wears a crown.\""
  array[50] = "\"So foul and fair a day I have not seen.\""
  array[51] = "\"It is a wise father that knows his own child.\""
  array[52] = "\"Some rise by sin, and some by virtue fall.\""
  array[53] = "\"Nature hath framed strange fellows in her time.\""
  array[54] = "\"Virtue is bold, and goodness never fearful.\""
  array[55] = "\"I know a baseball star who wouldn't report the theft of his wife's credit cards because the thief spends less than she does.\""
  array[56] = "\"He who serves God has a good master.\""
  array[57] = "\"Desperate times call for desperate measures.\""
  array[58] = "\"Every fool is pleased with his own folly.\""
  array[59] = "\"Gentlemen, you can't fight in here! This is the War Room.\""
  array[60] = "\"Fat, drunk, and stupid is no way to go through life, son.\""
  array[61] = "\"Looks like you've been missing a lot of work lately. - I wouldn't say I've been missing it, Bob.\""
  array[62] = "\"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\""
  array[63] = "\"You know you're in love when you can't fall asleep because reality is finally better than your dreams.\""
  array[64] = "\"No one can make you feel inferior without your consent.\""
  array[65] = "\"Choose a job you love, and you will never have to work a day in your life.\""
  array[66] = "\"Always forgive your enemies; nothing annoys them so much.\""
  array[67] = "\"Live as if you were to die tomorrow. Learn as if you were to live forever.\""
  array[68] = "\"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.\""
  array[69] = "\"Welfare's purpose should be to eliminate, as far as possible, the need for its own existence.\""
  array[70] = "\"An investment in knowledge pays the best interest.\""
  array[71] = "\"Energy and persistence conquer all things.\""
  array[72] = "\"It is the working man who is the happy man. It is the idle man who is the miserable man.\""
  array[73] = "\"They who can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety.\""
  array[74] = "\"Your net worth to the world is usually determined by what remains after your bad habits are subtracted from your good ones.\""
  array[75] = "\"Any fool can criticize, condemn and complain - and most fools do.\""
  array[76] = "\"I am for doing good to the poor, but I differ in opinion about the means. I think the best way of doing good to the poor is not making them easy in poverty, but leading or driving them out of it.\""
  array[77] = "\"Life's tragedy is that we get old too soon and wise too late.\""
  array[78] = "\"Money has never made man happy, nor will it, there is nothing in its nature to produce happiness. The more of it one has the more one wants.\""
  array[79] = "\"Success is not final, failure is not fatal: it is the courage to continue that counts.\""
  array[80] = "\"To improve is to change; to be perfect is to change often.\""
  array[81] = "\"The best argument against democracy is a five-minute conversation with the average voter.\""
  array[82] = "\"Never, never, never give up.\""
  array[83] = "\"Kites rise highest against the wind - not with it.\""
  array[84] = "\"Victory at all costs, victory in spite of all terror, victory however long and hard the road may be; for without victory, there is no survival.\""
  array[85] = "\"Socialism is a philosophy of failure, the creed of ignorance, and the gospel of envy, its inherent virtue is the equal sharing of misery.\""
  array[86] = "\"You have enemies? Good. That means you've stood up for something, sometime in your life.\""
  array[87] = "\"America will never be destroyed from the outside. If we falter and lose our freedoms, it will be because we destroyed ourselves.\""
  array[88] = "\"Get your facts first, then you can distort them as you please.\""
  array[89] = "\"The secret of getting ahead is getting started.\""
  array[90] = "\"Kindness is the language which the deaf can hear and the blind can see.\""
  array[91] = "\"There are basically two types of people. People who accomplish things, and people who claim to have accomplished things. The first group is less crowded.\""
  array[92] = "\"The lack of money is the root of all evil.\""
  array[93] = "\"Patriotism is supporting your country all the time, and your government when it deserves it.\""
  array[94] = "\"Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.\""
  array[95] = "\"Whenever you find yourself on the side of the majority, it is time to pause and reflect.\""
  array[96] = "\"Don't go around saying the world owes you a living. The world owes you nothing. It was here first.\""
  array[97] = "\"All you need in this life is ignorance and confidence, and then success is sure.\""
  array[98] = "\"Innovation distinguishes between a leader and a follower.\""
  array[99] = "\"Computers themselves, and software yet to be developed, will revolutionize the way we learn.\""
  array[100] = "\"Great things in business are never done by one person. They're done by a team of people.\""
  array[101] = "\"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.\"" 
  
  
  
//Here is where quote is selected. j loops thru usedQuotes and if array[i] is found, then returns and calls randomQuote again
  for (var j=0; j<usedQuotes.length; j++){
    if (array[i]==usedQuotes[j]){ return randomQuote(); }
  }
  // I used setTimeout for a little delay.  Could have used jQuery $(document).ready(function(){}) 
 setTimeout(function(){document.getElementById("b1").innerHTML = array[i];}, 100);
  // quote used is pushed into usedQuotes[]
    usedQuotes.push(array[i]);
  
  //usedQuotes is an array to hide quotes already used.  The remaining quotes are searched randomly until all are gone.
  if (usedQuotes.length==array.length){ alert("You are out of quotes!  Please reload page.");}
  
  // sub[] is an array to store author names
  sub[0] = "- Yogi Berra";
  sub[1] = "- Nelson Mandela";
  sub[2] = "- Maurice Switzer"
  sub[3] = "- Robert Wilensky"
  sub[4] = "- Arthur Schopenhauer"
  sub[5] = "- Yogi Berra"
  sub[6] = "- Yogi Berra"
  sub[7] = "- Albert Einstein"
  sub[8] = "- Vance Havner"
  sub[9] = "- George Miller"
  sub[10] = "- Dwight Eisenhower"
  sub[11] = "- Elbert Hubbard"
  sub[12] = "- Jimmy Dean"
  sub[13] = "- Francis of Assisi"
  sub[14] = "- Vince Lombardi"
  sub[15] = "- William Shakespeare"
  sub[16] = "- W.H. Auden"
  sub[17] = "- W.H. Auden"
  sub[18] = "- W.H. Auden"
  sub[19] = "- W.H. Auden"
  sub[20] = "- W.H. Auden"
  sub[21] = "- W.H. Auden"
  sub[22] = "- W.H. Auden"
  sub[23] = "- W.H. Auden"
  sub[24] = "- Thomas A. Edison"
  sub[25] = "- W.H. Auden"
  sub[26] = "- William Shakespeare"
  sub[27] = "- William Shakespeare"
  sub[28] = "- William Shakespeare"
  sub[29] = "- William Shakespeare"
  sub[30] = "- William Shakespeare"
  sub[31] = "- William Shakespeare"
  sub[32] = "- William Shakespeare"
  sub[33] = "- William Shakespeare"
  sub[34] = "- William Shakespeare"
  sub[35] = "- William Shakespeare"
  sub[36] = "- William Shakespeare"
  sub[37] = "- William Shakespeare"
  sub[38] = "- William Shakespeare"
  sub[39] = "- William Shakespeare"
  sub[40] = "- William Shakespeare"
  sub[41] = "- William Shakespeare"
  sub[42] = "- William Shakespeare"
  sub[43] = "- William Shakespeare"
  sub[44] = "- William Shakespeare"
  sub[45] = "- William Shakespeare"
  sub[46] = "- William Shakespeare"
  sub[47] = "- Mark Twain"
  sub[48] = "- William Shakespeare"
  sub[49] = "- William Shakespeare"
  sub[50] = "- William Shakespeare"
  sub[51] = "- William Shakespeare"
  sub[52] = "- William Shakespeare"
  sub[53] = "- William Shakespeare"
  sub[54] = "- William Shakespeare"
  sub[55] = "- Joe Garagiola"
  sub[56] = "- Italian Proverb"
  sub[57] = "- Italian Proverb"
  sub[58] = "- Italian Proverb"
  sub[59] = "- Dr. Strangelove"
  sub[60] = "- Animal House"
  sub[61] = "- Office Space"
  sub[62] = "- Albert Einstein"
  sub[63] = "- Dr. Seuss"
  sub[64] = "- Eleanor Roosevelt"
  sub[65] = "- Confucius"
  sub[66] = "- Oscar Wilde"
  sub[67] = "- Mahatma Gandhi"
  sub[68] = "- Martin Luther King Jr."
  sub[69] = "- Ronald Reagan"
  sub[70] = "- Benjamin Franklin"
  sub[71] = "- Benjamin Franklin"
  sub[72] = "- Benjamin Franklin"
  sub[73] = "- Benjamin Franklin"
  sub[74] = "- Benjamin Franklin"
  sub[75] = "- Benjamin Franklin"
  sub[76] = "- Benjamin Franklin"
  sub[77] = "- Benjamin Franklin"
  sub[78] = "- Benjamin Franklin"
  sub[79] = "- Winston Churchill"
  sub[80] = "- Winston Churchill"
  sub[81] = "- Winston Churchill"
  sub[82] = "- Winston Churchill"
  sub[83] = "- Winston Churchill"
  sub[84] = "- Winston Churchill"
  sub[85] = "- Winston Churchill"
  sub[86] = "- Winston Churchill"
  sub[87] = "- Abraham Lincoln"
  sub[88] = "- Mark Twain"
  sub[89] = "- Mark Twain"
  sub[90] = "- Mark Twain"
  sub[91] = "- Mark Twain"
  sub[92] = "- Mark Twain"
  sub[93] = "- Mark Twain"
  sub[94] = "- Mark Twain"
  sub[95] = "- Mark Twain"
  sub[96] = "- Mark Twain"
  sub[97] = "- Mark Twain"
  sub[98] = "- Steve Jobs"
  sub[99] = "- Steve Jobs"
  sub[100] = "- Steve Jobs"
  sub[101] = "- Confucius"
  
  //Here is where author matches quote.  (i is used for both array[i] and sub[i] to match)
  // I used setTimeout for a little delay.  Could have used jQuery $(document).ready(function(){})
  setTimeout(function(){document.getElementById("c1").innerHTML = sub[i];}, 100);

} // End of function randomQuote()
  randomQuote();
  $("#r").click(randomQuote);
 
})();
   $("#s").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text=" + $('#b1').text() + $('#c1').text() );
  });
  
});
// Change to jQuery with $(document).ready(function() helped
// Had to add line 325 to access randomQuote

