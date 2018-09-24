





var callbackArguments = [];
var argument1 = function (v, i) {
 callbackArguments.push(arguments) 

    ys[baseId][i] = v > 0 ? v : 0;
};
var argument2 = false;
var argument3 = null;
var argument4 = function (source) {
 callbackArguments.push(arguments) 

    for (var prop in source) {
        if (source[prop] !== void 0) {
            obj[prop] = source[prop];
        }
    }
};
var argument5 = [-100,"F7","1","5","H",25];
var argument6 = function (r) {
 callbackArguments.push(arguments) 

    r.line = i;
    dt.push(r);
    i++;
};
var argument7 = r_1;
var argument8 = function (child) {
 callbackArguments.push(arguments) 

    child._create();
};
var base_0 = ["=","!","`k","+<"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=","!","`k","+<"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=","!","`k","+<"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=","!","`k","+<"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test223.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)