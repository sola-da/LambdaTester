





var callbackArguments = [];
var argument1 = function (output, guest) {
 callbackArguments.push(arguments) 

    guest = extend({}, guest, { mealOptions: options.hash.meals });
    return output + options.fn(guest);
};
var argument2 = null;
var argument3 = {")?":"1Ew","1.7943081201748512e+308":3.2101975278535635e+307,"1.2840375318467056e+308":"U#","5.393054903530909e+307":"n","oia":""};
var argument4 = function (a, branch) {
 callbackArguments.push(arguments) 

    return a.concat(branch.body);
};
var argument5 = r_0;
var argument6 = function (promise, hook) {
 callbackArguments.push(arguments) 

    return promise ? promise.then(hook) : hook();
};
var argument7 = r_2;
var argument8 = function (sum, value) {
 callbackArguments.push(arguments) 

    return sum + value;
};
var argument9 = r_2;
var argument10 = false;
var base_0 = ["W",82,157,59,"i8",",",893,"W^afC#e+"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W",82,157,59,"i8",",",893,"W^afC#e+"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W",82,157,59,"i8",",",893,"W^afC#e+"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W",82,157,59,"i8",",",893,"W^afC#e+"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test501.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)