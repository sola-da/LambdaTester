





var callbackArguments = [];
var argument1 = function (el) {
 callbackArguments.push(arguments) 

    return !fn(el);
};
var argument2 = [5e-324,213,893];
var argument3 = false;
var argument4 = function (other) {
 callbackArguments.push(arguments) 

    return _.indexOf(other, item) >= 0;
};
var argument5 = null;
var argument6 = function (r) {
 callbackArguments.push(arguments) 

    return !r || r === 'linked' || /^https?:\/\//.test(r) || /^gh:/.test(r) || /^github:/.test(r) || semver.satisfies(version, r);
};
var argument7 = null;
var argument8 = {"403":714,"807":"","":843,"1.4321001943035092e+308":"_",">7":"","G":213,"m=r_":460,"$":82,"1.5955126732838482e+307":""};
var argument9 = function (key) {
 callbackArguments.push(arguments) 

    return ~actual.indexOf(key);
};
var argument10 = [823,157,969,627,618];
var base_0 = [126,126,705,49,705,82]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,126,705,49,705,82]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,126,705,49,705,82]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,126,705,49,705,82]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyMined/test611.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)