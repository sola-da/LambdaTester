





var callbackArguments = [];
var argument1 = function (dir) {
 callbackArguments.push(arguments) 

    return async.glob(head + dir + '/' + tail.slice(1).join('/'));
};
var argument2 = null;
var argument3 = null;
var argument4 = function (c) {
 callbackArguments.push(arguments) 

    return pv.color(c);
};
var argument5 = function (x) {
 callbackArguments.push(arguments) 

    if (typeof x[0] != 'string')
        x[0] = x[0].name;
    if (!x[1])
        x = x[0];
    return x;
};
var argument6 = true;
var argument7 = ["U#",":n","L","ia","wZB*|%E","j8",">k"];
var argument8 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument9 = 1.0356941841899618e+308;
var argument10 = "?@";
var base_0 = ["c","W^afC#e+","o","S"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["c","W^afC#e+","o","S"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["c","W^afC#e+","o","S"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["c","W^afC#e+","o","S"]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test527.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)