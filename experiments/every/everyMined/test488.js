





var callbackArguments = [];
var argument1 = function (haystack) {
 callbackArguments.push(arguments) 

    return contains(haystack, needle);
};
var argument2 = r_0;
var argument3 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument4 = r_1;
var argument5 = false;
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument7 = [893,100,100,618,595];
var argument8 = function (op) {
 callbackArguments.push(arguments) 

    return Op.isInsert(op);
};
var argument9 = true;
var base_0 = [607,893,82,618,783,705,-1,969,122,843]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,893,82,618,783,705,-1,969,122,843]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,893,82,618,783,705,-1,969,122,843]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,893,82,618,783,705,-1,969,122,843]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyMined/test488.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)