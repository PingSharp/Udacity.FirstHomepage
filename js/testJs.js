
var height;
var width;
var currentColor = (document.getElementById("colorPicker")).value;
var isclear = true;
function makeGrid()
{
    if(isclear === true)
    {
        isclear = false;
    
    event.preventDefault();
    
height = (document.getElementById("inputHeight")).value;
width = (document.getElementById("inputWidth")).value;
var table = document.getElementById("pixelCanvas");
for(var i = 1;i <= Number(height);i++)
{
    var tableRow = document.createElement("tr");
    table.appendChild(tableRow);
    for(var j = 1;j <= Number(width);j++)
    {
        var tD = document.createElement("td");
        tD.setAttribute("class","cells")
       
        tableRow.appendChild(tD);
        
    }
}
document.querySelectorAll('.cells').forEach(e =>e.addEventListener("click",function(event)
{
    var td = event.target;
    td.style.backgroundColor = currentColor;
}))
    } 
    else
    {
        isclear = true;
        event.preventDefault();
        var table = document.getElementById("pixelCanvas");
        var tds = document.getElementsByClassName("cells");
        var trs = document.getElementsByTagName("tr");
       
        for(var i = trs.length-1;i >=0;i--)
        {
            table.removeChild(trs[i]);
            
            // for(var j = 1;j <= Number(width);j++)
            // {
            //     trs[i].removeChild(tds[j]);
                
            // }
        }
        makeGrid();
    }

}


function setColor()
{
    var color = (document.getElementById("colorPicker")).value;
    currentColor = color;
}
