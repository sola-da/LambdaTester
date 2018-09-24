





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = 969
argument2[4] = 2.477417751815406e+307
argument3 = {"655":82,"1.4479794431835018e+308":"9$"}
return a/b*c
};
var argument2 = ["Z",213,122,655,5e-324,"F"];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = [460,25,126,49]
argument4[2.249941463060761e+307] = ""
return a*b-c
};
var argument4 = [157,618,893,893,49,714,59];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = {"122":213,"157":"","969":1.513623815136999e+308,"":"","3.7331535665894627e+307":"","6+":843}
argument7[6] = [59,655,607,655,59,627,893,-100,460]
return a+b*c
};
var argument6 = false;
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][5e-324] = ""
base_3[5][0] = null
return a*b+c
};
var argument9 = null;
var argument10 = r_2;
var base_0 = [1.7976931348623157e+308,213,0,618,-1,627,893]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,213,0,618,-1,627,893]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,213,0,618,-1,627,893]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,213,0,618,-1,627,893]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test384.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)