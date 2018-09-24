





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8][0] = "v3"
base_0[1] = {"k":1.5665185793923981e+308,"c#":"{","8.526293616241545e+307":""}
argument2[1.0500354979187844e+308] = [627,25,823,403,783,627]
return a-b+c
};
var argument2 = null;
var argument3 = "y";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6][4] = ["Ga_","a","2"]
return a-b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][6] = ["|","ce","6","j^J","$","7ocp","tG"]
argument6[3] = ["(",">"]
argument7[3] = [823,655,1.7976931348623157e+308,655,157,460]
return a-b/c
};
var argument6 = r_1;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1] = 1.69457723897452e+308
base_3[1][6] = null
base_3[8] = true
return a-b*c
};
var argument9 = {"59":655,"100":"B","213":"","969":"?","":"_","1.705228036153275e+308":":","+L!":"","-1":9.036045164943343e+307,"2.1737863886644282e+307":2.155907708198452e+307,"!":"T"};
var base_0 = [607,969,157,705]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,969,157,705]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,969,157,705]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,969,157,705]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test546.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)