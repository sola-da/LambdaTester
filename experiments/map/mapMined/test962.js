





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return this[property];
};
var argument2 = null;
var argument3 = false;
var argument4 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument5 = false;
var argument6 = {"0":1.003951779058562e+308,"":1.513623815136999e+308};
var argument7 = function (value) {
 callbackArguments.push(arguments) 

    return (isFunc ? method : value[method]).apply(value, args);
};
var argument8 = "zbM{>*t";
var argument9 = false;
var argument10 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument11 = 7.374243695583032e+307;
var base_0 = [460,25,126,49]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,25,126,49]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,25,126,49]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,25,126,49]
var r_3= undefined
try {
r_3 = base_3.map(argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapMined/test962.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)