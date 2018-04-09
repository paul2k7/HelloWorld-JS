/*
function getAvarage(a,b){
    var avarage = (a + b) / 2;
    console.log(avarage);
    return myResult;
}

var myResult = getAvarage(1,5);
*/



/*
function aSrednia(a,b){
    var srednia = (a + b) / 2;
    console.log(srednia);
}

aSrednia(2,4);*/

var a = "hello";
var b = 5;

if (!isNaN(a)) {            // double negative
    console.log(a + b);

}
else {
    console.log("To nie jest numer, gosciu");
    console.log("Podałeś a równe - " + (a) );
}





var myString = "Jestem nowym stringiem";
var wprowadź = "hello";

if (myString.indexOf(wprowadź) === -1) {
    console.log(wprowadź + " - nie ma tego słowa");

}
 else{
    console.log("Słowo " + wprowadź + " znajduje się w tym wyrażeniu.");
}

console.log("Wprowadzone słowo to: " + wprowadź);




/*
if(myString.indexOf("ninja") === -1){
    console.log("nie ma");
}


var string1 = "abc";
var string2 = "ABC";

console.log(string1.toLowerCase() === string2.toLowerCase());
*/




var str = "hello world";
console.log(str);

var str2 = str.slice(2,9);
console.log(str2);

var str3 = str.slice(2);
console.log(str3);

var tags = "mieso, slodycze, ciastka, inne";
console.log(tags);

var tagsArray = tags.split(", ");
console.log(tagsArray);











