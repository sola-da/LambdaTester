





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    x = x.clone();
    if (x.start.row == oldStart.row)
        x.start.column += collDiff;
    if (x.end.row == oldStart.row)
        x.end.column += collDiff;
    x.start.row += rowDiff;
    x.end.row += rowDiff;
    return x;
};
var argument2 = function (mem) {
 callbackArguments.push(arguments) 

    return isMongooseObject(mem) ? mem.toObject({ depopulate: 1 }) : mem;
};
var argument3 = 8.442991923811213e+307;
var argument4 = "";
var argument5 = function (v, i) {
 callbackArguments.push(arguments) 

    return (1 - a) * blend[i] + a * v;
};
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    return x.shift();
};
var argument7 = null;
var base_0 = ["Ne","%","a",-1,"Q","R"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Ne","%","a",-1,"Q","R"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Ne","%","a",-1,"Q","R"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Ne","%","a",-1,"Q","R"]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test748.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)