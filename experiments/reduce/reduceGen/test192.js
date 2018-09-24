





var callbackArguments = [];
var argument1 = true;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = 1.6675713048518134e+308
base_0[6] = [",7",100,403,126]
base_0[6] = 823
return a/b+c+d
};
var argument5 = true;
var argument6 = true;
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = 82
base_1[2] = 7.275592924654905e+307
argument5 = null
return a*b/c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = 3.559193037267869e+307
return a/b*c*d
};
var argument10 = r_1;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13 = {"4":"","":"nn","jE:":1.597084743524148e+308,"?8":1.7976931348623157e+308,"uXs":1.2852529723805484e+308,"1.134530367769051e+308":893,"7.265666132223115e+307":"^*9","1.7887667262409417e+308":7.844419091857747e+307,"HV":""}
return a/b+c-d
};
var argument13 = false;
var base_0 = ["$","n","mK","@Cm","i","t"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$","n","mK","@Cm","i","t"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$","n","mK","@Cm","i","t"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$","n","mK","@Cm","i","t"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test192.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)