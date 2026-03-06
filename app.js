const abc = 'abcdefghijklmnopqrstuvwxy'.split('');
const bg = new Image();
bg.src = "imgs/image.png";

const bItems = new Image();
//bItems.src = "imgs/image.png";
bItems.src = 'imgs/columbingo_transparent_1.png';

const cardL = document.getElementById("card");

const storage = new FileReader();

let width = 360;
let height = 360;
let xoffset = 60;
let yoffset = 310;


class BingoCard{
    constructor(player,img, id = null)
    {
        this.player = player;
        this.img = img;
        this.id = id;
    }
}

class Spot{
    constructor(x,y,id)
    {
        this.x = x;
        this.y = y;
        this.id = id;
    }
}

function createCard()
{
    var itemlist = spliceItems();

    var bingoCard = document.createElement('canvas');
    var ctx = bingoCard.getContext('2d');
    
    ctx.canvas.width = 1920;
    ctx.canvas.height = 2160;
    bingoCard.id = 'myCanvas'
    ctx.drawImage(bg,0,0);

    var index = 0;
    for (let ax = 0; ax <5; ax++)
    {
        for (let ay = 0; ay < 5; ay++)
        {   
            if (ax === 2 && ay === 2)
            {
                ctx.drawImage(bItems,itemlist[24].x,itemlist[24].y, width,height,(ax*width + xoffset), (ay*height + yoffset),width,height);
            }
            else
            {
                ctx.drawImage(bItems,itemlist[index].x,itemlist[index].y, width,height,(ax*width + xoffset), (ay*height + yoffset),width,height);
                index++;
            }
            
            
        }
    }


    
    if (cardL.hasChildNodes()) 
    {
        cardL.removeChild(cardL.children[0]);
    }
    cardL.appendChild(bingoCard);
    

}


function spliceItems()
{   

    var itemIndex = 0;
    var items = [];
    
    for (let x = 0; x < 5; x++)
    {
        for (let y = 0; y < 5; y++)
        {   
            if (itemIndex === 12)
            {
                itemIndex++;
                continue;
            }
            else
            {
                let a = new Spot((x *width + xoffset),(y*height + yoffset),abc[itemIndex]);
                items.push(a);
                itemIndex++;
            }

        }
    }

    shuffle(items);

    items.push(new Spot((2*width + xoffset),(2*height + yoffset)))


    return items;
}

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function getRandomInt(min, max) 
{
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}