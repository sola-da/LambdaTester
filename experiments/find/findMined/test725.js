





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc3._id;
};
var argument2 = ["Z","4","fT:","oQ","=","T","X{","-r"];
var argument3 = false;
var argument4 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === newDoc1._id;
};
var argument5 = [655,607,-100,460,1.7976931348623157e+308,893,1.7976931348623157e+308,823];
var argument6 = null;
var argument7 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '3';
};
var argument8 = {"126":-100,"893":"l:p|","9.389268826820935e+306":"X%[E","3.238015156526358e+307":"5","7.000962854824987e+307":460,"tN":"","f":"","5.825937428895834e+307":714,"1.3693763787406623e+308":"U"};
var argument9 = false;
var argument10 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc2._id;
};
var argument11 = null;
var base_0 = [">"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [">"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [">"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [">"]
var r_3= undefined
try {
r_3 = base_3.find(argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findMined/test725.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)