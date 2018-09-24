





var callbackArguments = [];
var argument1 = function (bit, i) {
 callbackArguments.push(arguments) 

    if (bit.call) {
        return 'value[' + i + '].call(this, property)';
    } else {
        return bit;
    }
};
var argument2 = function (a) {
 callbackArguments.push(arguments) 

    return jQuery.find(t, a);
};
var argument3 = 5.840829025700274e+307;
var argument4 = null;
var argument5 = function (p) {
 callbackArguments.push(arguments) 

    return p.substring(1, p.length - 1);
};
var argument6 = r_0;
var argument7 = function (a) {
 callbackArguments.push(arguments) 

    return a.hash;
};
var argument8 = r_2;
var argument9 = true;
var base_0 = ["fz",",",595,"C",893]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["fz",",",595,"C",893]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["fz",",",595,"C",893]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test891.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)