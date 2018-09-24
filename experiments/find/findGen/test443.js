





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['!j'] = true
argument2['f-d'] = ["A","Vy","!"]
return a/b/c
};
var argument2 = null;
var argument3 = 2.986636245259768e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[460] = false
return a-b/c
};
var argument5 = false;
var argument6 = {"122":242,"242":"","705":"","":"r","-1":6.815504219638164e+306,"Y":403,"1.4932404858227425e+308":"9","[":"","V":""};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['AA@'] = {"5":1.4808582231728431e+308,"893":0,"":"yP]","3M{vx9g":823,"1.4599590254315292e+308":"sy'"}
base_2[2] = null
return a+b-c
};
var argument8 = [783,0,242,403,823,595,157];
var argument9 = false;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6][4] = null
return a*b/c
};
var argument11 = false;
var base_0 = ["^f","@a",595,"7B","q","QS;Jz",783,"r",607]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^f","@a",595,"7B","q","QS;Jz",783,"r",607]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^f","@a",595,"7B","q","QS;Jz",783,"r",607]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^f","@a",595,"7B","q","QS;Jz",783,"r",607]
var r_3= undefined
try {
r_3 = base_3.find(argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findGen/test443.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)