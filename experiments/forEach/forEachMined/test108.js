





var callbackArguments = [];
var argument1 = function (vi) {
 callbackArguments.push(arguments) 

    callMethod(mm, vi);
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    stats[valu"Error"]++;
};
var argument5 = {"213":2.5095553697318185e+307,"843":"wDyFp%","9.88184128297285e+307":"(","":"#+","oN":618,"c":"xs"};
var argument6 = function (obj) {
 callbackArguments.push(arguments) 

    var node = obj.item.node;
    var position = dojo.position(node, true);
    var y = position.y + position.h / 2;
    obj.y = y;
};
var argument7 = false;
var argument8 = true;
var argument9 = function (cb) {
 callbackArguments.push(arguments) 

    cb();
};
var argument10 = r_0;
var base_0 = ["AG1;","mWN@q","9z",969,"Fb!yK"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["AG1;","mWN@q","9z",969,"Fb!yK"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["AG1;","mWN@q","9z",969,"Fb!yK"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["AG1;","mWN@q","9z",969,"Fb!yK"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test108.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)