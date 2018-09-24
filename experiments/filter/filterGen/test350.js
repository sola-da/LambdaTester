





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = {"126":"wN<pa","9.264746930471168e+306":"fMEm","1.142572938169964e+308":"","1.0203656453055998e+308":"c","#":9.774715804646457e+307,"<":49}
argument3[6] = null
base_0 = {"7":"","403":"","893":"D","":"","2.42265310319301e+307":59,"<xy":"Y1"}
return a*b-c
};
var argument2 = true;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[157] = {"7.485132788497625e+307":9.18255266051776e+307,"":""}
argument5[6] = {"126":242,"823":"","-100":242,"s;":"","":1.23857659196499e+308,"1.5302129470841668e+308":"[-"}
return a/b/c
};
var argument5 = [59,0,49,157,655,595];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][5e-324] = 59
return a*b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = [823,122,-100,607]
base_3[4][7] = true
return a-b*c
};
var argument8 = r_1;
var base_0 = ["vXh","z?","Dp%v5","[v+m","_?"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
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
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test350.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)