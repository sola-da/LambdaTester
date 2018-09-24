





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = ["M",627,122,242,82,893,843,49,"tS{"]
argument2 = true
argument3[59] = {"893":"5#&^$","<":2.9725346845624886e+307,"-100":"","":595,"2L+":893,"i&Y":655,"1.6219539715804006e+308":5.012299611977361e+307,"8.576193237744693e+307":"G","1.669111106835708e+308":"","_":1.7014334406157127e+308}
return a+b/c
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[59] = null
base_1['length'] = true
return a+b+c
};
var argument5 = false;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[7] = null
return a-b*c
};
var argument8 = "";
var argument9 = [242,403,100,823,122];
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[49] = null
argument11[4.224481734419934e+307] = false
argument11['U+WQ'] = [893,969,213,100]
return a/b/c
};
var base_0 = ["%","X","D@|O,*","%>^[c_<;","8",")","ECr"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%","X","D@|O,*","%>^[c_<;","8",")","ECr"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["%","X","D@|O,*","%>^[c_<;","8",")","ECr"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["%","X","D@|O,*","%>^[c_<;","8",")","ECr"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test476.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)