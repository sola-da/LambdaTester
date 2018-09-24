





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][1] = true
argument1[4] = null
argument3['18{'] = [-100,-1,242,618,460,714,460,0]
return a/b-c*d
};
var argument2 = true;
var argument3 = true;
var argument4 = r_1;
var argument5 = false;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7.463432409233234e+307] = ["W","niQ#)"]
argument5[82] = false
return a-b-c*d
};
var argument8 = [49,59,893,0,893,607,403];
var argument9 = 82;
var argument10 = ["y;","Kyl)|AH",213,"n",705,"D!A",823,"7"];
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2.1869172855352885e+307] = 8.388881714050796e+307
return a*b+c-d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = ""
argument13[0] = "|Fa=z_"
base_3[9] = null
return a/b-c-d
};
var argument13 = "";
var argument14 = r_3;
var base_0 = [242,0,618,25]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,0,618,25]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,0,618,25]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,0,618,25]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test425.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)