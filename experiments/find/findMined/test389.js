





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc4._id;
};
var argument2 = function (id) {
 callbackArguments.push(arguments) 

    return id === fieldLabelId;
};
var argument3 = 1.3043178918377789e+308;
var argument4 = true;
var argument5 = function (id) {
 callbackArguments.push(arguments) 

    return id === fieldLabelId;
};
var argument6 = null;
var argument7 = r_2;
var argument8 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === id2;
};
var argument9 = 4.373907142014289e+307;
var base_0 = ["%","4D|ow","7","f"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%","4D|ow","7","f"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["%","4D|ow","7","f"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["%","4D|ow","7","f"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findMined/test389.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)