





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][6] = 2.5573528323070414e+305
base_0[3][1] = null
base_0[1][0] = [-100,59,618,655,595,-100,460,122,607]
return a+b-c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = [627,969,49,1.7976931348623157e+308,607,783,122,893,969]
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[893] = ""
base_2[2] = 627
argument7['!j'] = null
return a+b-c
};
var argument6 = false;
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][2] = 1.7193886475895474e+308
argument10[893] = null
argument10['LK'] = "<XEj2"
return a+b*c
};
var argument9 = r_1;
var argument10 = false;
var base_0 = [783,122,783,100,49,157,-100,893,627]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,122,783,100,49,157,-100,893,627]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,122,783,100,49,157,-100,893,627]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,122,783,100,49,157,-100,893,627]
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
require("fs").writeFileSync("./experiments/find/findGen/test539.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)