





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5.262931091360336e+307] = [460,618,893]
base_0[8] = "M"
return a*b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4][7] = null
return a+b-c
};
var argument4 = "";
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = null
argument7[0] = [893]
return a/b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[460] = ["n","`","-e)","0R(","E","VW*"]
base_3['length'] = "-"
base_3[0] = null
return a*b/c
};
var argument8 = 618;
var argument9 = r_0;
var base_0 = ["]","4R)h[",";",893,"<"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["]","4R)h[",";",893,"<"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]","4R)h[",";",893,"<"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test815.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)