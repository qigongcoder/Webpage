"use strict";

let quotes = [

  {
    id:1,
    quote:"Don’t cry because it’s over, smile because it happened.",
    author: "Dr. Seuss"
  },

  {
    id:2,
    quote:"Be who you are and say what you feel, because those who mind don’t matter, and those who matter don’t mind.",
    author:"Bernard M. Baruch"
  },
    
  {
    id:3,
    quote:"Be yourself; everyone else is already taken.",
    author:"Oscar Wilde"
  },


  {
    id:5,
    quote:"Don’t walk behind me; I may not lead. Don’t walk in front of me; I may not follow. Just walk beside me and be my friend.",
    author:"Albert Camus"
  },
    
  {
    id:6,
    quote:"No one can make you feel inferior without your consent.",
    author:"Eleanor Roosevelt"
  },

  {
    id:7,
    quote:"Imagination is the beginning of creation. You imagine what you desire; you will what you imagine; and at last you create what you will.",
    author:"George Bernard Shaw"
  },

  {
    id:8,
    quote:"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author:"Maya Angelou"
  },

  {
    id:9,
    quote:"It’s not who you are that holds you back, it’s who you think you’re not",
    author:"Unknown"
  },

  {
    id:10,
    quote:"What the mind of man can conceive and believe, the mind of man can achieve.",
    author:"Napoleon Hill"
  },

  {
    id:11,
    quote:"We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author:"Aristotle"
  },

  {
    id:12,
    quote:"The fear of death follows from the fear of life. A man who loves fully is prepared to die at any time.",
    author:"Mark Twain"
  },

  {
    id:13,
    quote:"There are no accidents; there is only some purpose that we haven’t yet understood.",
    author:"Deepak Chopra"
  },

  {
    id:14,
    quote:"Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice.",
    author:"Wayne Dyer"
  },

  {
    id:15,
    quote:"Impossible is a word to be found only in the dictionary of fools.",
    author:"Napoleon Bonaparte"
  },

  {
    id:16,
    quote:"The only way of finding the limits of the possible is by going beyond them into the impossible.",
    author:"Arthur C. Clarke"
  },

  {
    id:17,
    quote:"It is hard to fail but it is worse never to have tried to succeed.",
    author:"Theodore Roosevelt"
  },

  {
    id:18,
    quote:"There is just one life for each of us: our own.",
    author:"Euripides"
  },
  
  {
    id:19,
    quote:"Friendship is born at that moment when one person says to another: “What! You too? I thought I was the only one.",
    author:"C.S. Lewis"
  },

  {
    id:20,
    quote:"You only live once, but if you do it right, once is enough.",
    author:"Mae West"
  },

  {
    id:21,
    quote:"To live is the rarest thing in the world. Most people exist, that is all.",
    author:"Oscar Wilde"
  },

  {
    id:22,
    quote:"Remember, happiness doesn’t depend upon who you are or what you have, it depends solely upon what you think.",
    author:"Dale Carnegie"
  },

  {
    id:23,
    quote:"We are all in the gutter, but some of us are looking at the stars.",
    author:"Oscar Wilde"
  },

  {
    id:24,
    quote:"That which does not kill us makes us stronger.",
    author:"Friedrich Nietzsche"
  },

  {
    id:25,
    quote:"I have not failed. I’ve just found 10,000 ways that won’t work.",
    author:"Thomas A. Edison"
  },

  {
    id:26,
    quote:"I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.",
    author:"Dr. Seuss"
  },

  {
    id:27,
    quote:"The only man who never makes mistakes is the man who never does anything.",
    author:"Theodore Roosevelt"
  },

  {
    id:28,
    quote:"In three words I can sum up everything I’ve learned about life: It Goes On",
    author:"Unknown"
  },

  {
    id:29,
    quote:"Man’s mind, once stretched by a new idea, never regains its original dimensions.",
    author:"Oliver Wendell Holmes, Jr"
  },

  {
    id:30,
    quote:"It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
    author:"Friedrich Nietzsche"
  },

  {
    id:31,
    quote:"It does not do to dwell on dreams and forget to live.",
    author:"J.K. Rowling"
  },

  {
    id:32,
    quote:"Imperfection is beauty, madness is genius and it’s better to be absolutely ridiculous than absolutely boring.",
    author:"Marilyn Monroe"
  },

  {
    id:33,
    quote:"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    author:"Albert Einstein"
  },

  {
    id:34,
    quote:"If you don’t stand for something you will fall for anything.",
    author:"Malcolm X"
  },

  {
    id:35,
    quote:"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    author:"Bil Keane"
  },

  {
    id:36,
    quote:"Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
    author:"Mark Twain"
  },

  {
    id:37,
    quote:"You must be the change you wish to see in the world.",
    author:"Mahatma Gandhi"
  },

  {
    id:38,
    quote:"The future belongs to those who believe in the beauty of their dreams.",
    author:"Eleanor Roosevelt"
  },

  {
    id:39,
    quote:"The secret of getting ahead is getting started.",
    author:"Mark Twain"
  },
  
  {
    id:40,
    quote:"The greater damage for most of us is not that our aim is too high and we miss it, but that it it too low and we reach it.",
    author:"Michelangelo"
  },
  
  {
    id:41,
    quote:"Do not go where the path may lead , go instead where there is no path and leave a trail.",
    author:"Ralph Waldo Emerson"
  },
  
  {
    id:42,
    quote:"Be thankful for what you have; you’ll end up having more. If you concentrate on what you don’t have, you will never, ever have enough.",
    author:"Oprah Winfrey"
  },
  
  {
    id:43,
    quote:"Faith consists in believing when it is beyond the power of reason to believe.",
    author:"Voltaire"
  },
  
  {
    id:44,
    quote:"Simplicity is the key to brilliance.",
    author:"Bruce Lee"
  },
  
  {
    id:45,
    quote:"There is no end. There is no beginning. There is only the infinite passion of life.",
    author:"Federico Fellini"
  },
  
  {
    id:46,
    quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author:"Ralph Waldo Emerson"
  },
  
  {
    id:47,
    quote:"For every minute you are angry you lose sixty seconds of happiness.",
    author:"Ralph Waldo Emerson"
  },
  
  {
    id:48,
    quote:"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
    author:"Helen Keller"
  },
  
  {
    id:49,
    quote:"People are just as happy as they make up their minds to be.",
    author:"Abraham Lincoln"
  },
  
  {
    id:50,
    quote:"The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.",
    author:"Bob Marley"
  },
  
  {
    id:51,
    quote:"It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all – in which case, you fail by default.",
    author:"J.K. Rowling"
  },
  
  {
    id:52,
    quote:"The question isn’t who is going to let me; it’s who is going to stop me.",
    author:"Ayn Rand"
  },
  
  {
    id:53,
    quote:"Do one thing every day that scares you.",
    author:"Eleanor Roosevelt"
  },
  
  {
    id:54,
    quote:"The more things are forbidden, the more popular they become.",
    author:"Mark Twain"
  },
  
  {
    id:55,
    quote:"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author:"Lao Tzu"
  },
 
  {
    id:56,
    quote:"It is never too late to be what you might have been.",
    author:"George Eliot"
  },
  
  {
    id:57,
    quote:"If you can’t explain it to a six year old, you don’t understand it yourself.",
    author:"Albert Einstein"
  },
  
  {
    id:58,
    quote:"We don’t see things as they are, we see them as we are.",
    author:"Ana’s Nin"
  },
  
  {
    id:59,
    quote:"Love is that condition in which the happiness of another person is essential to your own.",
    author:"Robert A. Heinlein"
  },
  
  {
    id:60,
    quote:"Not all of us can do great things. But we can do small things with great love.",
    author:"Mother Teresa"
  },
  
  {
    id:61,
    quote:"If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.",
    author:"A.A. Milne"
  },
  
  {
    id:62,
    quote:"Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author:"Albert Einstein"
  },
  
  {
    id:63,
    quote:"In three words I can sum up everything I’ve learned about life: It Goes On.",
    author:"Robert Frost"
  },
  
  {
    id:64,
    quote:"You only live once, but if you do it right, once is enough.",
    author:"Mae West"
  },
  
  {
    id:65,
    quote:"Today you are You, that is truer than true. There is no one alive who is Youer than You.",
    author:"Dr. Seuss, Happy Birthday to You!"
  },
  
  {
    id:66,
    quote:"To live is the rarest thing in the world. Most people exist, that is all.",
    author:"Oscar Wilde"
  },
  
  {
    id:67,
    quote:"You’ve gotta dance like there’s nobody watching, Love like you’ll never be hurt, Sing like there’s nobody listening, And live like it’s heaven on earth.",
    author:"William W. Purkey"
  },
  
  {
    id:68,
    quote:"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    author:"Albert Einstein"
  },
  
  {
    id:69,
    quote:"Good friends, good books, and a sleepy conscience: this is the ideal life.",
    author:"Mark Twain"
  },
  
  {
    id:70,
    quote:"Life is what happens to us while we are making other plans.",
    author:"Allen Saunders"
  },
  
  {
    id:71,
    quote:"Sometimes the questions are complicated and the answers are simple.",
    author:"Dr. Seuss"
  },
  
  {
    id:72,
    quote:"Don’t cry because it’s over, smile because it happened.",
    author:"Dr. Seuss"
  },
  
  {
    id:73,
    quote:"Life isn’t about finding yourself. Life is about creating yourself.",
    author:"George Bernard Shaw"
  },
  
  {
    id:74,
    quote:"Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author:"Winston S. Churchill"
  },
  
  {
    id:75,
    quote:"I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.",
    author:"Herbert Bayard Swope"
  },
  
  {
    id:76,
    quote:"If at first you don’t succeed, try, try again. Then quit. No use being a damn fool about it.",
    author:"W.C. Fields"
  },
  
  {
    id:77,
    quote:"Try not to become a man of success. Rather become a man of value.",
    author:"Albert Einstein"
  },      
  
  {
    id:78,
    quote:"It is better to fail in originality than to succeed in imitation.",
    author:"Herman Melville"
  },
  
  {
    id:79,
    quote:"Success usually comes to those who are too busy to be looking for it.",
    author:"Henry David Thoreau"
  },
  
  {
    id:80,
    quote:"If you can make a woman laugh, you can make her do anything.",
    author:"Marilyn Monroe"
  },
  
  {
    id:81,
    quote:"We are what we pretend to be, so we must be careful about what we pretend to be.",
    author:"Kurt Vonnegut, Mother Night"
  },
  
  {
    id:82,
    quote:"The flower that blooms in adversity is the rarest and most beautiful of all.",
    author:"Walt Disney Company, Mulan"
  },
  
  {
    id:83,
    quote:"We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.",
    author:"Maya Angelou"
  },
  
  {
    id:84,
    quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author:"Thomas A. Edison"
  },
  
  {
    id:85,
    quote:"It does not matter how slowly you go as long as you do not stop.",
    author:"Confucius"
  },
];

    function changeQuote(){
       

      let index=Math.floor(Math.random() * quotes.length);

      document.getElementById('text').innerHTML = quotes[index].quote;
      document.getElementById('author').innerHTML = quotes[index].author;


    };