





var callbackArguments = [];
var argument1 = false;
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][4] = 1.228751093441229e+308
base_0 = "U"
return a*b/c+d
};
var argument5 = false;
var argument6 = r_1;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = [100]
return a-b*c+d
};
var argument9 = {"0":1.2686667917271384e+307,"82":"","627":1.5494519308071832e+308,"-1":"","1.1013759235066533e+308":893,"":"6v","9.20803941418951e+307":627};
var argument10 = r_1;
var argument11 = [82,-1];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[9] = "R"
base_2[2] = ""
argument9[9] = {"25":"b","L":"^8","5.470629726298899e+307":"]7T","1.5044098811580886e+308":"j","5.769209924172425e+307":"","":"JDU","3.54696358842057e+307":"","5.16722353546287e+307":"am"}
return a/b*c*d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[126] = null
argument13[2.1869172855352885e+307] = false
return a-b-c-d
};
var argument14 = r_1;
var argument15 = r_0;
var base_0 = [618,213,"E",5e-324,460,"=",82]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,213,"E",5e-324,460,"=",82]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,213,"E",5e-324,460,"=",82]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,213,"E",5e-324,460,"=",82]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test325.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)