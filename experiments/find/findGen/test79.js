





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6][4] = null
base_0[1][7] = null
argument1[893] = 595
return a*b+c
};
var argument2 = r_0;
var argument3 = 1.098961563107443e+308;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = [":eYuo",627,714,893]
return a/b-c
};
var argument5 = r_0;
var argument6 = 59;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[-1] = {}
argument8[5] = {"82":59,"783":"","":"h","2Y>yPr[":714,"Bm;":"","6.953192544217866e+307":2.551163782560422e+307,"7.926412479491489e+307":""}
return a-b+c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = ""
return a*b-c
};
var argument9 = false;
var argument10 = false;
var base_0 = [823,607,969,242,59,0,0,-1,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,607,969,242,59,0,0,-1,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,607,969,242,59,0,0,-1,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.find(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,607,969,242,59,0,0,-1,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test79.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)