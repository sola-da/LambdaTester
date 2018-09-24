





var callbackArguments = [];
var argument1 = function (a, b) {
 callbackArguments.push(arguments) 

    return (a || '').toString() + (b || '').toString();
};
var argument2 = function (acc, parent) {
 callbackArguments.push(arguments) 

    return acc + parent.name + '.';
};
var argument3 = [157,157,783,-100,"0",-1,"n"];
var argument4 = null;
var argument5 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument6 = {"82":"w","122":6.380957859177959e+307,"618":"f","705":"","-100":9.389532628111172e+307,"T":1.316157878652434e+307,"":"8","1.0047204202530798e+308":"","1.085417142913377e+307":1.3279326546870789e+308};
var argument7 = {"460":"","607":969,"783":1.5904011878877677e+308,"g,":1.565375098654375e+308,"":"1",":":1.7485161608100604e+308,"1.0905873973647146e+308":"R","1.2327534357635355e+308":1.1073416810345524e+308,"_IQ8":100};
var argument8 = function (a, b) {
 callbackArguments.push(arguments) 

    return (a || '').toString() + (b || '').toString();
};
var argument9 = ["O","LT","[0","$F","J","n<","9","W","!Jm"];
var argument10 = {"403":1.7976931348623157e+308,"":"M9!`z","1.578290327263916e+307":"c","1.5556897368562238e+307":"1","1.1205084093738306e+308":714,"1.5652478879925697e+308":1.00189946106917e+308,"V":"","3.414090791166658e+307":"B^","9.82105098921328e+307":""};
var base_0 = [655,893,969,5e-324,122,0]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,893,969,5e-324,122,0]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,893,969,5e-324,122,0]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,893,969,5e-324,122,0]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightMined/test609.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)