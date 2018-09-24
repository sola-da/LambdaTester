





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return Math.abs(x % DX) > ε;
};
var argument2 = function (s) {
 callbackArguments.push(arguments) 

    return s[vars.id.value] == c[vars.id.value];
};
var argument3 = {"25":25,"157":1.031095186017137e+308,"403":1.019827371296065e+308,"1.062182293384743e+308":"6n","5.681407587487721e+307":"","":"","x":"","L":"","+":""};
var argument4 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument5 = null;
var argument6 = r_2;
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return isTargetToShow(d.id);
};
var base_0 = [242,"J"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,"J"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,"J"]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,"J"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test213.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)