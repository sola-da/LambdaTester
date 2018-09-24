





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    return !_.contains(rest, value);
};
var argument2 = 714;
var argument3 = false;
var argument4 = function () {
 callbackArguments.push(arguments) 

    var i = 0;
    for (; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument5 = false;
var argument6 = false;
var argument7 = function (prop) {
 callbackArguments.push(arguments) 

    return prop.baseProperty == null;
};
var argument8 = function (d) {
 callbackArguments.push(arguments) 

    return fetchValue(vars, d, vars.id.value) == vars.focus.value[0];
};
var argument9 = r_3;
var base_0 = ["=",")","0","(o"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=",")","0","(o"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=",")","0","(o"]
var r_2= undefined
try {
r_2 = base_2.filter(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=",")","0","(o"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test542.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)