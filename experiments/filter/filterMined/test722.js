





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    return !_.contains(rest, value);
};
var argument2 = false;
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return this.selected;
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    return !$(this).data(configuration('handledName'));
};
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    if (v.unused)
        warning('W098', v.token, v.value);
    if (v.undef)
        isundef(v.funct, 'W117', v.token, v.value);
};
var base_0 = ["nH",";P4","8muoi"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["nH",";P4","8muoi"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["nH",";P4","8muoi"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test722.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)