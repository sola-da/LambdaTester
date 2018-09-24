





var callbackArguments = [];
var argument1 = function (ban) {
 callbackArguments.push(arguments) 

    return user.matchesMask(ban.mask);
};
var argument2 = ["nx","4"];
var argument3 = function () {
 callbackArguments.push(arguments) 

    context = this;
};
var argument4 = [595];
var argument5 = null;
var argument6 = function (el) {
 callbackArguments.push(arguments) 

    return el.num === 2 && el.char === 'B';
};
var argument7 = function (haystack) {
 callbackArguments.push(arguments) 

    return contains(haystack, needle);
};
var argument8 = {"823":6.369680828079892e+307,"":7.476088812309458e+307,"dko5n":460,"T#A":783,"6.024309994656555e+307":"","1.6525164938222353e+308":49,"yr9O":"","8.456630653608027e+306":8.996658451033572e+307};
var argument9 = null;
var base_0 = [":","Nr","`",843,"J8","<W,"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [":","Nr","`",843,"J8","<W,"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [":","Nr","`",843,"J8","<W,"]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [":","Nr","`",843,"J8","<W,"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
}
catch(e) {
r_3= "Error"
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/some/someMined/test246.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)