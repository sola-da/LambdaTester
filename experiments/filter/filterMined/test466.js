





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return item.blockID !== block.blockID;
};
var argument2 = ["9?",714,655,893,59,1.7976931348623157e+308,"R<","W",627];
var argument3 = function (item, index) {
 callbackArguments.push(arguments) 

    return array.indexOf(item) === index;
};
var argument4 = "nYS=";
var argument5 = false;
var argument6 = function (element) {
 callbackArguments.push(arguments) 

    return this.indexOf(element) < 0;
};
var argument7 = function (viewDBName) {
 callbackArguments.push(arguments) 

    return !viewsToStatus[viewDBName];
};
var argument8 = [627];
var base_0 = ["H",",>C6","l","U)","1"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["H",",>C6","l","U)","1"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["H",",>C6","l","U)","1"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["H",",>C6","l","U)","1"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test466.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)