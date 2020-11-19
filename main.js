

var c = document.getElementById("MyCanvas");
var ctx = c.getContext("2d");
function drawstar(x,y,color)
{
    ctx.strokeStyle=color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+15, y+17);
    ctx.lineTo(x+27, y+18);
    ctx.lineTo(x+15, y+33);
    ctx.lineTo(x+18, y+51);
    ctx.lineTo(x+2, y+42);
    ctx.lineTo(x-15, y+51);
    ctx.lineTo(x+-12, y+32);
    ctx.lineTo(x-24, y+18);
    ctx.lineTo(x-7, y+17);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.closePath();

}
function drawtarget(x,y,r,n,color)
{
    ctx.strokeStyle=color;
    ctx.beginPath();
    let radius=r;
    for(i=0;i<n;i++)
    {

        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        radius+=3;
        ctx.stroke();
        ctx.closePath();




    }

    ctx.closePath();

}
drawstar(100,10,"Cyan");
drawtarget(100,10,10,2,"Red");
drawstar(180,60,"Yellow");
drawtarget(160,50,10,2,"Orange");

