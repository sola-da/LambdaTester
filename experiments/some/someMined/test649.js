





var callbackArguments = [];
var argument1 = function (el) {
 callbackArguments.push(arguments) 

    return el.num === 1 && el.char === 'A';
};
var argument2 = 1.2987880759285326e+308;
var argument3 = {"157":"","705":"","823":242,"1.279695832470261e+308":"","":"","9.630212157563758e+307":607,"1.4210689857972175e+308":3.9799820854720077e+307,"$":",'AF","5.345536249807961e+307":1.3941159821079587e+308};
var argument4 = function (filter) {
 callbackArguments.push(arguments) 

    return filter(json);
};
var argument5 = true;
var argument6 = true;
var argument7 = function (r) {
 callbackArguments.push(arguments) 

    return comparePoints(r.start, start) <= 0 && comparePoints(r.end, end) >= 0;
};
var argument8 = r_0;
var argument9 = null;
var argument10 = function (el) {
 callbackArguments.push(arguments) 

    return el.num === 3 && el.char === 'C';
};
var argument11 = true;
var base_0 = [460,157,126]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,157,126]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,157,126]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,157,126]
var r_3= undefined
try {
r_3 = base_3.some(argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someMined/test649.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)