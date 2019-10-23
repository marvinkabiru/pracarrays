$ (document).ready (function(){
var alphabets = ["A", "B", "C"];
var rand = Math.random();
console.log(rand);
var alphabeType = alphabets[rand];
//condition1
if (alphabet == "A"){
    document.write("Amatch");
}
else{
    document.write("not Amatch");
}
//condition 2
if(alphabet == "A" || alphabet == "B"){
    document.write("First Two");
}
else{
    document.write("not First Two");
}
//key position of B
document.write(alphabets.indexOf("B"));
//length of the array
document.write(alphabets.length);
});
