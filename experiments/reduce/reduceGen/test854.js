





var callbackArguments = [];
var argument1 = false;
var argument2 = {"627":"J","893":"","1.6026746524432674e+308":"","p":5.398540254024111e+307};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[25] = [607,242,"L","OufL[","K","`f+&",893]
argument3 = ""
return a/b+c-d
};
var argument5 = {"893":"Hrp+*","969":1.045874217027236e+308,"=X0m":1.4810025899576882e+308,"4S":607,"1.4824159936478084e+307":"2N_uY","3.8298317146700494e+307":"","`":"","@4Ev":"","1.3403785794593945e+308":122};
var argument6 = 126;
var argument7 = 1.4159192520116632e+308;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][4] = null
return a/b*c-d
};
var argument9 = null;
var argument10 = 1.6668845717896292e+307;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.1277822633002616e+308] = [157,25]
argument10[213] = 843
return a*b*c*d
};
var argument13 = r_3;
var argument14 = r_3;
var argument15 = false;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[0] = [122,843,655,5e-324,0,59,-1,705]
argument14[9.331954948603684e+307] = ["7","i","q","zj","AVD?","7o","l"]
argument15[4] = "&<"
return a-b*c-d
};
var base_0 = ["Q","D","JY","|","Og4",":iZj","=w!","m","N"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Q","D","JY","|","Og4",":iZj","=w!","m","N"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Q","D","JY","|","Og4",":iZj","=w!","m","N"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Q","D","JY","|","Og4",":iZj","=w!","m","N"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test854.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)