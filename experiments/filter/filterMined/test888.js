





var callbackArguments = [];
var argument1 = function (b) {
 callbackArguments.push(arguments) 

    return utils.classify(b.message) === type;
};
var argument2 = null;
var argument3 = function (ext) {
 callbackArguments.push(arguments) 

    return ext.name === 'EnumType';
};
var argument4 = false;
var argument5 = function (element, index, array) {
 callbackArguments.push(arguments) 

    return array.indexOf(element) >= index;
};
var argument6 = r_1;
var argument7 = 6.579816757465892e+307;
var argument8 = function (c) {
 callbackArguments.push(arguments) 

    return c;
};
var argument9 = null;
var base_0 = ["E",1.7976931348623157e+308,"I","(",783,"X",595]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["E",1.7976931348623157e+308,"I","(",783,"X",595]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["E",1.7976931348623157e+308,"I","(",783,"X",595]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test888.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)