// JavaScript source code
filterSelection("all")
function filterSelection(c)
{
    var x, i;
    x = document.getElementsByClassName("foliocolumn");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++)
    {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}
function AddClass(element, name)
{
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++)
    {
        if (arr1.indexOf(arr2[i]) == -1)
        {
            element.className += " " + arr2[i];
        }
    }
}
function RemoveClass(element, name)
{
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++)
    {
        while (arr1.indexOf(arr2[i]) > -1)
        {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
function activchange(a) {
    var portfoliofilter = document.getElementById("portfolio-filter");
    var filter = portfoliofilter.getElementsByClassName("filter");

    for (var i = 0; i < filter.length; i++) {
        var classnames = filter[i].className.split(" ");
        if (classnames.includes("gridactive"))
        {
           filter[i].className = filter[i].className.replace("gridactive", "");
        }
       
            
            
        
    }

    var element = document.getElementById(a);
    element.className += " " + "gridactive";
}

function openmenu(id)
{
    var dropdown = document.getElementById(id);
    var dropdownitem = document.getElementById("dropdownitem");
    var i;
    if (dropdownitem.style.display == "none") {
        dropdownitem.style.display = "block";
        dropdown.style.backgroundColor = "white";
    }
    else{
        dropdownitem.style.display = "none";
        dropdown.style.backgroundColor = "transparent";
    }
}
function showpic(id)
{
               
    var pic = document.getElementById("showpic");
    var hoverpic = document.getElementById(id).firstChild;
    var hoverpicsrc = hoverpic.getAttribute("src");
  
    
    pic.setAttribute("src", hoverpicsrc);
}
