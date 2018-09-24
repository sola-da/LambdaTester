





var callbackArguments = [];
var argument1 = function (line) {
 callbackArguments.push(arguments) 

    return '  ' + line;
};
var argument2 = ["Z0q;L5",0,59,"qz","o<",607,607];
var argument3 = function (v) {
 callbackArguments.push(arguments) 

    return mc(v);
};
var argument4 = false;
var argument5 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument6 = null;
var argument7 = 1.052769842586063e+308;
var argument8 = function (rev) {
 callbackArguments.push(arguments) 

    return rev.id;
};
var argument9 = "";
var argument10 = false;
var base_0 = [460,969,893]
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
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/map/mapMined/test406.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)