





var callbackArguments = [];
var argument1 = function (m) {
 callbackArguments.push(arguments) 

    return m.completion;
};
var argument2 = r_0;
var argument3 = function (x) {
 callbackArguments.push(arguments) 

    return x * OIMO.INV_SCALE;
};
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
};
var argument5 = null;
var argument6 = ["[_u","<)ZNw"," ","4","{Y"];
var argument7 = function (p) {
 callbackArguments.push(arguments) 

    if (p instanceof Function) {
        return;
    }
    return p;
};
var argument8 = true;
var argument9 = 8.249589502626883e+307;
var base_0 = ["wu^+L","X","IS","&b)","S","=X])","o6 ","KrxE","1q("]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["wu^+L","X","IS","&b)","S","=X])","o6 ","KrxE","1q("]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test237.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)