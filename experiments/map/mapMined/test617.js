





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return {
        x: d.x,
        value: d.value,
        id: d.id
    };
};
var argument2 = null;
var argument3 = function (dimName) {
 callbackArguments.push(arguments) 

    return atoms[dimName].key;
};
var argument4 = r_1;
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    return d[xKey];
};
var argument6 = [157,595,783,655,122,893];
var argument7 = r_2;
var argument8 = function (item) {
 callbackArguments.push(arguments) 

    item['title'] = item['name'];
    return item;
};
var base_0 = ["[P<","m[","r","-B","a","M","eT","WO0"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[P<","m[","r","-B","a","M","eT","WO0"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[P<","m[","r","-B","a","M","eT","WO0"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[P<","m[","r","-B","a","M","eT","WO0"]
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test617.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)