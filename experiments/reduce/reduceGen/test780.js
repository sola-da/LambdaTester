





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[460] = "e"
argument3[595] = ["?y<","C-M","Uub"]
return a-b+c+d
};
var argument2 = null;
var argument3 = "";
var argument4 = null;
var argument5 = 1.3531322857752557e+307;
var argument6 = 893;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[59] = {"1.444227847829419e+308":"=","1.7976931348623157e+308":1.30995426679649e+308,"1.0071910324540918e+308":8.3527674213361e+307,"1.7227118995208848e+308":"('"}
base_1[3][1] = {"618":"G","":1.022433694207142e+308,"]":7.395657988212942e+307,"9.202759220364535e+307":""}
return a/b+c/d
};
var argument8 = null;
var argument9 = r_2;
var argument10 = ["C:_1r{","E","p","*","<"];
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = 1.0724419821290106e+307
base_2[7] = null
return a-b/c+d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13 = [893,157,705,213,595,823,25,595,157]
argument14[90] = null
argument13[5] = "["
return a-b*c*d
};
var argument13 = r_2;
var base_0 = ["ou","aS%#>Oe!","v+2","H","t","j@7","z=m"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["ou","aS%#>Oe!","v+2","H","t","j@7","z=m"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["ou","aS%#>Oe!","v+2","H","t","j@7","z=m"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["ou","aS%#>Oe!","v+2","H","t","j@7","z=m"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test780.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)