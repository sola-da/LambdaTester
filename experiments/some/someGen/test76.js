





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = {"403":1.5377456617408041e+308,"1.0276898003560138e+308":"a]'","7.387755180548353e+306":126,"4.3453656916368807e+307":"Z","":-1,"{}!'":"","1.0693381485327306e+308":8.219983422705878e+307}
argument2[5] = 1.5577471643951153e+308
return a*b/c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = [607,100]
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = ["`Y","mSz|","G","<","}{(>","5N","[<|","U"]
argument6[618] = {"213":1.3970290950529104e+308,"403":"","6.941678027601735e+307":"*","7.890074380234332e+307":"{","+p=":"Iae","":1.0016213056723406e+308,"0C-":"S$","1.3426854933107927e+308":122}
base_2[6] = false
return a*b*c
};
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3] = -1
argument9[1] = true
base_3[2][5e-324] = {"460":1.3806899954065692e+307,"893":82,"969":403,"5.526547854399515e+307":"6","4.392583087188832e+307":"D","6.496638231100557e+307":"B","":""}
return a*b-c
};
var base_0 = ["Z","I"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Z","I"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Z","I"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Z","I"]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test76.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)