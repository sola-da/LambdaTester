





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    return ~actual.indexOf(key);
};
var argument2 = null;
var argument3 = function (type) {
 callbackArguments.push(arguments) 

    return tokenTypes.indexOf(type) !== -1;
};
var argument4 = [618,"Z?",595,714,":Xdj1n1","FHn:}"];
var argument5 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument6 = function (op) {
 callbackArguments.push(arguments) 

    return InsertOp.isInsert(op);
};
var argument7 = {"59":"H[Y","823":893,"893":6.357788157596447e+307,"":1.3108262771349412e+308,"1.2189982772877954e+308":"","1.7066500062956766e+308":"","QST=":"","1.4152594606946776e+308":"J"};
var base_0 = ["W",59,705,0,"Y18","N","}NrP","d",100]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W",59,705,0,"Y18","N","}NrP","d",100]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W",59,705,0,"Y18","N","}NrP","d",100]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W",59,705,0,"Y18","N","}NrP","d",100]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyMined/test591.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)