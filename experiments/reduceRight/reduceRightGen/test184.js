





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = ""
base_0[5] = true
argument2[8.575765443877852e+307] = {"5":126,"823":"nS1","ic":3.561884422361337e+307,"6.793951850215456e+306":4.712473309726752e+307,"_7":1.2805631052975962e+308,"2.1106452143828554e+307":2.7275939102763093e+307,"2.0843870603760354e+307":1.3301663428844115e+307,"6.877638990614698e+307":"8U","Xr0Wv?`":1.6119467414952539e+307,"-100":"|("}
return a+b*c+d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = "v;"
return a*b/c+d
};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['w'] = 607
argument6[0] = "#v&@D"
return a*b*c+d
};
var argument6 = [705,"="];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = null
argument9[3] = ["j"]
return a/b+c-d
};
var argument8 = true;
var base_0 = [595,823,969,893,843,"q"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,823,969,893,843,"q"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,823,969,893,843,"q"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,823,969,893,843,"q"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test184.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)