





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][4] = {"":9.903173678458722e+307,")z":"1"}
argument3['HMm'] = null
argument2[5] = false
return a*b-c*d
};
var argument2 = 1.9278920564740297e+307;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = ["L","5","OHzh","G",714,122]
argument4[1.1532786076532189e+308] = {"=K":"s98a5"}
argument4[82] = ["J",122,"&"]
return a-b-c+d
};
var argument4 = r_1;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = [714,823,59,0]
argument5[8] = {"":"]","3.816798248841258e+307":1.0780921364646456e+308,"2.0764521269055854e+307":2.0344679590651786e+307,"b":""}
return a*b-c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = ["#",823,"Jr","Ds",893,705,1.7976931348623157e+308,"Yb","-"]
return a/b/c/d
};
var argument7 = [460,618,157,100];
var argument8 = 1.237264069582576e+308;
var base_0 = [100,843,25,783,403,595,126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,843,25,783,403,595,126]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,843,25,783,403,595,126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,843,25,783,403,595,126]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test890.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)