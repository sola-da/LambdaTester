





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.6706143966770798e+306] = 1.4268603186023174e+308
argument2[0] = true
return a*b+c
};
var argument2 = [607,460,893];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = null
argument6[122] = false
base_1[2] = [-100]
return a*b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[122] = 9.562858712503314e+307
argument6[4.960033715165713e+307] = [607,969,627]
argument7[2.4183178393969103e+306] = true
return a-b/c
};
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[8] = {"5.002637895515752e+307":-1,"":""}
base_3[0][1] = true
argument8 = {"607":"7X","g6n":655,"9.157973446930796e+307":"'","":1.231145298402946e+308,"H":595,"6.554752476909879e+307":1.3612998837583666e+308,"3.9588546946017315e+307":1.2649392475586269e+308}
return a+b-c
};
var argument8 = null;
var argument9 = "+C";
var base_0 = [122,843,"s","B",242]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,843,"s","B",242]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,843,"s","B",242]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,843,"s","B",242]
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
require("fs").writeFileSync("./experiments/every/everyGen/test838.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)