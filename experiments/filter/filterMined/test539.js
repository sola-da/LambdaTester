





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return item !== void 0 && item !== null;
};
var argument2 = function (t) {
 callbackArguments.push(arguments) 

    return isTargetToShow(t.id);
};
var argument3 = "";
var argument4 = null;
var argument5 = function (backup) {
 callbackArguments.push(arguments) 

    return backup.name === name;
};
var argument6 = {"0":"","595":"1","705":"","823":9.437723817866675e+307,"1.6149726084213438e+308":6.056904011540616e+307,"":""};
var argument7 = function (c) {
 callbackArguments.push(arguments) 

    return old.indexOf(c) === -1;
};
var base_0 = [403,25,823]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,25,823]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,25,823]
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test539.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)