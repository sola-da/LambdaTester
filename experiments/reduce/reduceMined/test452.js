





var callbackArguments = [];
var argument1 = function (prev, next) {
 callbackArguments.push(arguments) 

    var mp = multiplier(prev), mn = multiplier(next);
    return mp > mn ? mp : mn;
};
var argument2 = function (prev, cur) {
 callbackArguments.push(arguments) 

    numLinesEst++;
    if (cur.indexOf('\n') >= 0)
        numLinesEst++;
    return prev + cur.length + 1;
};
var argument3 = null;
var argument4 = "O";
var argument5 = function (prev, next) {
 callbackArguments.push(arguments) 

    var mp = multiplier(prev), mn = multiplier(next);
    return mp > mn ? mp : mn;
};
var argument6 = null;
var argument7 = false;
var argument8 = function (result, key) {
 callbackArguments.push(arguments) 

    var pair = cb(obj[key], key, obj);
    result[pair[0]] = pair[1];
    return result;
};
var argument9 = 893;
var argument10 = null;
var base_0 = ["[#","+",969,607,"}"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[#","+",969,607,"}"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[#","+",969,607,"}"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[#","+",969,607,"}"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test452.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)