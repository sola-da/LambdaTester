





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = 5.546721888215481e+307
base_0[0][2] = {"82":2.2828083832204316e+307,"Ql":"A","1.3369578468609993e+308":"","":893,"9.371398346326024e+307":969,"7.103995973047636e+307":"FT=`Dn","1.1074563683935594e+308":"s8rI","K":"","1.5602010831581043e+308":"h","3.6697225050085335e+307":59}
base_0[7] = [-1,460,82,823,100,25]
return a*b*c
};
var argument2 = {};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = {"!_T":1.7976931348623157e+308,"":460}
return a-b*c
};
var argument5 = r_1;
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2.4183178393969103e+306] = [595,126,969,126,157]
return a*b+c
};
var argument8 = r_0;
var argument9 = false;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12 = ["(LR","BC>","F","N@LG","F","s","b","1"]
return a-b*c
};
var base_0 = [607,705]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,705]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,705]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,705]
var r_3= undefined
try {
r_3 = base_3.every(argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test538.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)