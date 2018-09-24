





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627] = [1.7976931348623157e+308,893,403,-1,783,49,403,242,122]
argument2[';N'] = 1.7976931348623157e+308
base_0[0][4] = [59,"jt",82]
return a/b-c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = {"213":"","969":"","1.4258492218339616e+308":1.2141193218636959e+307,"5.074445219794249e+307":783,"?Um+":1.6496452698489395e+308,"":"eiZX(_T^"}
argument4[25] = ""
return a/b*c/d
};
var argument3 = null;
var argument4 = 1.2365586552642658e+308;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = null
argument6[';N'] = 8.940126871146741e+307
return a/b-c/d
};
var argument6 = {"0":1.5704053724234662e+308,"":3.051067124938239e+307,"fe":5.053808373458476e+307,"<@":6.736228027286508e+307};
var argument7 = {"82":"Po","893":"em","":655,"1.3002197172067547e+308":7.674116019462609e+307,"3.9047168751301043e+307":1.2538012671212053e+307,"1.6959042244852137e+308":"","9.718990855104834e+307":"","1.2071620338339777e+308":"","3.790855159465602e+307":126};
var argument8 = null;
var argument9 = ["#1","+"," 2|","2#-"];
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = null
argument8[1.1277822633002616e+308] = null
argument9[403] = null
return a-b-c+d
};
var base_0 = ["yZ","(sCc","V","pR"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["yZ","(sCc","V","pR"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["yZ","(sCc","V","pR"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["yZ","(sCc","V","pR"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test486.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)