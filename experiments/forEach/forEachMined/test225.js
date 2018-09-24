





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    dst[key] = src[key];
};
var argument2 = true;
var argument3 = 5.511526906682539e+307;
var argument4 = function (file) {
 callbackArguments.push(arguments) 

    expanded.push(file);
};
var argument5 = 2.8650161162404125e+307;
var argument6 = function (child) {
 callbackArguments.push(arguments) 

    if (child.resize) {
        child.resize();
    }
};
var argument7 = null;
var argument8 = ["j","fw",714,-100,0];
var argument9 = function (cell, i) {
 callbackArguments.push(arguments) 

    if (cell.index >= 0) {
        cell.index += 1;
    } else {
        console.debug('Error:IndirectSelection.addRowSelectCell()-  cell ' + i + ' has no index!');
    }
};
var argument10 = true;
var argument11 = r_2;
var base_0 = ["bq","33","=p"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["bq","33","=p"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["bq","33","=p"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["bq","33","=p"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test225.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)