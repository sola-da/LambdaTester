





var callbackArguments = [];
var argument1 = function (value, key) {
 callbackArguments.push(arguments) 

    callbackFn.call(thisArg, key, key, $__13);
};
var argument2 = null;
var argument3 = {"705":"","":1.4805471927194765e+306,"9v":"","Y":"+f2l","-1":893};
var argument4 = function (p) {
 callbackArguments.push(arguments) 

    this[p] = value;
};
var argument5 = [0,607,893];
var argument6 = function (n) {
 callbackArguments.push(arguments) 

    rg.addElement(n);
};
var argument7 = function (n) {
 callbackArguments.push(arguments) 

    t.is('number', typeof n);
};
var argument8 = r_2;
var base_0 = [969,5e-324,"J&",714,"FU",25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,5e-324,"J&",714,"FU",25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,5e-324,"J&",714,"FU",25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,5e-324,"J&",714,"FU",25]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test718.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)