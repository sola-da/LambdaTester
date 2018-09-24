





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = false
return a*b+c-d
};
var argument5 = ["P(0","&6rL","|","IH"];
var argument6 = true;
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7.889879335222838e+307] = 7.961213590011769e+307
base_1[0][3] = [")","=i","-JC","p[x","7ph{}","m"]
return a*b-c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[82] = ""
return a-b+c-d
};
var argument10 = [-1,59,"Wy",82,0,"{","Nr"];
var argument11 = {"1":"","595":"'","969":"WN&","3.0334163637380783e+307":122,"":893,"1.4711733941995158e+308":":","2.1744622259238977e+307":2.989319862792391e+307,"1.4050026741069037e+306":1.6173043414859847e+308};
var argument12 = null;
var argument13 = null;
var argument14 = 100;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[';N'] = 1.7976931348623157e+308
argument14[403] = {"595":"","627":4.446771312481538e+307,"1.440111349616383e+308":"","":823,"3.1542537003817227e+307":49,":E":"","0<":1.7976931348623157e+308}
return a*b-c+d
};
var base_0 = [242,-100,-100,618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,-100,-100,618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,-100,-100,618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,-100,-100,618]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test744.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)