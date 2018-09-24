





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return this.element;
};
var argument2 = r_0;
var argument3 = "";
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument5 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument6 = {"u":126,"":",{x!","2G":1.3038263301892557e+308,"l":1.5879717380597334e+308,"1.1361589939477603e+308":"["};
var argument7 = function (chunk) {
 callbackArguments.push(arguments) 

    return chunk.toString(encoding);
};
var argument8 = false;
var argument9 = 705;
var base_0 = ["&0","JK","N","v0","R","-&","9"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&0","JK","N","v0","R","-&","9"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["&0","JK","N","v0","R","-&","9"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test272.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)