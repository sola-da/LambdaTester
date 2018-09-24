





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = {"":618,"1.3135381389486989e+308":"","Z@-Zw":"","1.5240690061193233e+306":49,"{a":"o","-1":49}
argument1[126] = false
base_0[1] = {"705":122,"e":6.359352004902689e+307,"":"","a":"","1.105334022553788e+308":1.2278037320713883e+307,"%3":100,"6.441363258043442e+307":")","x":"","9.858671748952484e+307":"","fK":1.7731800524018398e+308}
return a/b-c*d
};
var argument2 = false;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = null
return a-b+c-d
};
var argument5 = null;
var argument6 = r_2;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = null
argument7[0] = 7.208182088771138e+307
return a-b-c-d
};
var argument9 = true;
var argument10 = [126,-100,242];
var argument11 = [705,25,122,100,126,705];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = null
argument9[4] = 100
base_3[8] = [460,49,49,460,25,893,100,627,403]
return a+b-c*d
};
var base_0 = [0,122,460,100,122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,122,460,100,122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,122,460,100,122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,122,460,100,122]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test125.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)