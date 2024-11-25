
var container = [
    {text:`“Be yourself; everyone else is already taken.”`,author:`― Oscar Wilde`}
    ,{text:`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,author:`― Oscar Wilde`}
    ,{text:`“So many books, so little time.”`,author:`― Frank Zappa`}
    ,{text:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,author:`― Albert Einstein`}
    ,{text:`“A room without books is like a body without a soul.”`,author:`― Marcus Tullius Cicero`}
    ,{text:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,author:`― Bernard M. Baruch`}
    ,{text:`“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”`,author:`― William W. Purkey`}
    ,{text:`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,author:`― Dr. Seuss`}
    ,{text:`“You only live once, but if you do it right, once is enough.”`,author:`― Mae West`}
    ,{text:`“Be the change that you wish to see in the world.”`,author:`― Mahatma Gandhi`}
];

var y;
var visited = [];
for(var i=0;i<container.length;i++)
{
    visited.push(false);
}

 
function random()
{
    var flag = true;
    for(var i = 0;i<container.length;i++)
    {
        if(visited[i] == false)
        {
            flag = false;
            break;
        }

    }
    if(flag)
    {
        for(var i=0;i<visited.length;i++)
        {
            visited[i] = false;
        }
    }
    do
    {
        y = Math.round(Math.random()*(container.length-1));

    }while(visited[y]==true);

    visited[y] = true;
   
}

function displayQuote()
{
    
    var temp = ``;
    temp += ` <h3>${container[y].text}</h3>
    <h3 class="mt-4">${container[y].author}</h3>`
    document.getElementById('quote').innerHTML = temp;
}



