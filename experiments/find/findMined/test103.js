





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === doc1._id;
};
var argument2 = true;
var argument3 = function (item, idx) {
 callbackArguments.push(arguments) 

    return idx === 0;
};
var argument4 = function (p) {
 callbackArguments.push(arguments) 

    return p.canPlay(source.toString());
};
var argument5 = r_1;
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    return d.somedata === 'ok';
};
var argument7 = null;
var base_0 = ["&","L",";*","c|","<","[","?","8l","$g"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&","L",";*","c|","<","[","?","8l","$g"]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["&","L",";*","c|","<","[","?","8l","$g"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["&","L",";*","c|","<","[","?","8l","$g"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findMined/test103.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)