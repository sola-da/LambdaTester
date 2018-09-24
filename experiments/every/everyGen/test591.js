





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = {"2.446190032281162e+307":59}
base_0[1][2] = "2u"
return a+b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8] = null
base_1[6] = {"":"","1.748968401118703e+308":9.468995870635517e+307,"4.0775625693592124e+307":"","7.973741147242261e+307":1.1127275548672738e+308,"@":1.4038574272581293e+308}
argument5[8] = null
return a/b/c
};
var argument4 = 823;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][4] = {"82":"","460":893,"705":"","R":969,"":823,"8S":"@U","f)":59,"1.619744821842175e+308":"","1.7791374685244306e+308":""}
argument7[1.9097830510613482e+307] = 1.0309794476385483e+308
base_2[0][0] = ""
return a/b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[893] = ""
argument8[1.3599216339661573e+308] = ""
return a+b+c
};
var argument8 = r_1;
var argument9 = null;
var base_0 = [705,618,460,82,969,705,607,100,-1]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,618,460,82,969,705,607,100,-1]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,618,460,82,969,705,607,100,-1]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,618,460,82,969,705,607,100,-1]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test591.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)