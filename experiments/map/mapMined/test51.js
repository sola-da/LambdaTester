





var callbackArguments = [];
var argument1 = function (v, k) {
 callbackArguments.push(arguments) 

    return k + '=' + v;
};
var argument2 = 9.729284432654409e+307;
var argument3 = null;
var argument4 = function (comp) {
 callbackArguments.push(arguments) 

    return pvc_PercentValue.parse(comp);
};
var argument5 = true;
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    x = x.clone();
    x.start.row += diff;
    x.end.row += diff;
    return x;
};
var argument7 = function (stop) {
 callbackArguments.push(arguments) 

    return Color(stop[1]);
};
var base_0 = [242,126,1.7976931348623157e+308,213,157,25,403,157,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,126,1.7976931348623157e+308,213,157,25,403,157,595]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test51.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)