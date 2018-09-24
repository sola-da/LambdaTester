





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.1277822633002616e+308] = true
base_0[0] = 823
argument3[1.359136872727139e+308] = 49
return a+b+c*d
};
var argument2 = null;
var argument3 = false;
var argument4 = false;
var argument5 = null;
var argument6 = {"714":-1,"":"Z","1.008759341492447e+308":6.039771466569329e+307,"nY":3.4603367473735246e+307,"1.432103192225979e+308":893,"mk!,3*^<<":8.632384338759214e+307};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = ""
base_1[0][4] = 618
return a+b-c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3] = null
argument9[213] = ["4n+",-100,59,59,"];D%",618,"a",5e-324]
return a/b/c*d
};
var argument9 = {"122":6.59453169624315e+307,"783":783,"893":"L$xK","":-100};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[0] = false
return a-b/c*d
};
var argument11 = r_1;
var argument12 = null;
var base_0 = [823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test502.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)