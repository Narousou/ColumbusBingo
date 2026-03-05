const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
const bg = new Image();
bg.src = "imgs/image.png";

const cardL = document.getElementById("card");

let width = 300;
let height = 300;


class BingoCard{
    constructor(player,img, id = null)
    {
        this.player = player;
        this.img = img;
        this.id = id;
    }
}


function createCard()
{
    var id = createID().split('');
    var itemList = partItems();
    var index = 0;

    var bingoCard = document.createElement('canvas');
    var ctx = bingoCard.getContext('2d');

    ctx.drawImage(bg,0,0)

    for (let x = 0; x <= 5; x++)
    {
        for (let y = 0; y <= 5; y++)
        {
            if (x === 3 && y === 3) 
            {
                continue;
            }
            ctx.drawImage(itemList[id[index]],x*width,y*height)
            index++;
        }
        
    }

    var NewBingoCard = new BingoCard("Player",bingoCard,id.join());
    cardL.appendChild(bingoCard)
    


}


function createID()
{
    var files = [];

    var id = "";

    for (let i = 0; i <= 25; i++)
    {
        if(i === 12){
            continue;
        }
        var randomInt = getRandomInt(1,25)
        id = id + abc[randomInt]

        if (i === 25 && files[id] != nil)
        {
            id = "";
            i = 0
        }

    }

    return id;
}



function partItems()
{

    var bItems = new Image();
    bItems.src = 'imgs/"columbingo_transparent_1.png"'

    var imgParts = [];
    for (let x = 0; x <= 5; x++)
    {
        for (let y = 0; y <= 5; y++)
        {
            var canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;

            var context = canvas.getContext('2d');
            context.drawImage(bItems, x*width,y*height,width,height,0,0,canvas.width,canvas.height);

            imgParts[abc[imgParts.length + 1]] = canvas.toDataURL();
        }
        
    }

    return imgParts;
}


function getRandomInt(min, max) 
{
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}