





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument2 = [213,783,893,82];
var argument3 = null;
var argument4 = function (v, i) {
 callbackArguments.push(arguments) 

    return v === a2[i];
};
var argument5 = true;
var argument6 = {"213":618,"595":627,"1.3216576995900928e+308":618,"R":705,"2.8934618432865473e+307":4.546263839282809e+307};
var argument7 = function (haystack) {
 callbackArguments.push(arguments) 

    return contains(haystack, needle);
};
var argument8 = function (kp) {
 callbackArguments.push(arguments) 

    return initialValues[kp.name] != null;
};
var argument9 = true;
var base_0 = [460,607,627,126,705,705,157,100]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,607,627,126,705,705,157,100]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,607,627,126,705,705,157,100]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,607,627,126,705,705,157,100]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyMined/test599.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)