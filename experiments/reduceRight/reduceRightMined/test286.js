





var callbackArguments = [];
var argument1 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument2 = ["jY","1"];
var argument3 = function (acc, parent) {
 callbackArguments.push(arguments) 

    return acc + parent.name + '.';
};
var argument4 = function (a, b) {
 callbackArguments.push(arguments) 

    return (a || '').toString() + (b || '').toString();
};
var argument5 = {"595":1.3595908850281993e+308,"":"","1.0750304475033423e+308":4.2700030228200026e+307};
var argument6 = r_2;
var argument7 = function (acc, parent) {
 callbackArguments.push(arguments) 

    return acc + parent.name + '.';
};
var argument8 = r_2;
var argument9 = ["a9","W","1","kWUJ&","w","sQ`N","}","#I","V!XJ"];
var base_0 = [122,607,893,1.7976931348623157e+308,595,460,655,705,213]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,607,893,1.7976931348623157e+308,595,460,655,705,213]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,607,893,1.7976931348623157e+308,595,460,655,705,213]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,607,893,1.7976931348623157e+308,595,460,655,705,213]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightMined/test286.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)