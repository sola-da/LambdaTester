





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[25] = "t5"
return a/b+c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[403] = true
return a/b+c-d
};
var argument3 = false;
var argument4 = [-100,893,714,893,705];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[82] = 25
argument5[2.1869172855352885e+307] = false
argument7[25] = "O-<]"
return a*b-c*d
};
var argument6 = false;
var argument7 = null;
var argument8 = 1.6561451932727983e+307;
var argument9 = "}";
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = {"82":"","92":1.170040614876174e+308,"":"","`C":"","4.88845335993414e+307":2.5885986945046204e+307,"<(":"eCfnDLJiE","lR":1.22157349492427e+308,"1.559078220923285e+308":"",">l":-100}
argument7[8] = 1.7733320784999906e+308
return a-b+c-d
};
var base_0 = ["N",893,"k","jc",627]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N",893,"k","jc",627]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N",893,"k","jc",627]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N",893,"k","jc",627]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test345.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)