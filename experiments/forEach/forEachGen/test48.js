





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = ["D",460,"V","M","q",627,59,627,893]
base_0[2] = false
base_0[5] = null
return a+b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.4034744228995816e+308] = "D"
return a-b-c
};
var argument4 = {"783":"WoW?","^]":">"};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = {"595":122,"O4":9.73976704348537e+307,"(":"Z","SF":"","":"XEo(",")":7.024657216925971e+307,"P!":""}
return a*b/c
};
var argument6 = r_1;
var argument7 = 6.439374115453593e+307;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = {"R":49,"%I$dU":1.220902704214747e+308,"o&tJ":1.4088422387698644e+308,"7.726534205001757e+307":""}
return a-b+c
};
var argument9 = "V";
var base_0 = [843,122,126,157,1.7976931348623157e+308,-1,823]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,122,126,157,1.7976931348623157e+308,-1,823]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,122,126,157,1.7976931348623157e+308,-1,823]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,122,126,157,1.7976931348623157e+308,-1,823]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test48.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)