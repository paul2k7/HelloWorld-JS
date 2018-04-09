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

if (!isNaN(a)) {            // double negative, jeśli to jest numer, to wykonaj:
    console.log(a + b);

}
else {                      // w przeciwnym wypadku (jeśli to nie jest numer), wykonaj to:
    console.log("To nie jest numer, gosciu");
    console.log("Podałeś a równe - " + (a) );
}




/* wyszukuje słowo ze zmiennej 'wprowadź' w 'myString' , sprawdza i podaje w konsoli,
 * można użyć okienek do wprowadzania prompt("Wprowadź szukane słowo:") w zmiennej 'wprowadź',
 * następnie zamiast konsoli użyć okienka js, alert("Podane słowo to " + wprowadź);  */
var myString = "Jestem nowym stringiem";
var wprowadź = "hello";

if (myString.indexOf(wprowadź) === -1) {
    console.log(wprowadź + " - nie ma tego słowa");

}
 else{
    console.log("Słowo " + wprowadź + " znajduje się w tym wyrażeniu.");
}

console.log("Wprowadzone słowo to: " + wprowadź);



/* indexOf - wyszukuje słowo "ninja" w zmiennej myString */
if(myString.indexOf("ninja") === -1){
    console.log("nie ma");
}

/* toLowerCase() - sprowadza do małych liter i porównuje (true or false) */
var string1 = "abc";
var string2 = "ABC";

console.log(string1.toLowerCase() === string2.toLowerCase());



/* SLICE function - wycina od a do b lub od a, w tym przypadku llo wor*/
var str = "hello world";
console.log(str);

var str2 = str.slice(2,9);
console.log(str2);

var str3 = str.slice(2);
console.log(str3);



/* SPLIT function - rozdziela poszczególne dane w string na substring (tworzy tablice)*/
var tags = "mieso, slodycze, ciastka, inne";
console.log(tags);

var tagsArray = tags.split(", ");
console.log(tagsArray);













