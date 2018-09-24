





var callbackArguments = [];
var argument1 = function (elem) {
 callbackArguments.push(arguments) 

    return [
        elem.nextSibling,
        elem.parentNode
    ];
};
var argument2 = function (prefix) {
 callbackArguments.push(arguments) 

    return prefix + 'Title';
};
var argument3 = false;
var argument4 = r_0;
var argument5 = function (value, i) {
 callbackArguments.push(arguments) 

    return Math.round(Fx.compute(from[i], to[i], delta));
};
var argument6 = 1.0969892626137895e+308;
var argument7 = function (p) {
 callbackArguments.push(arguments) 

    return p.map(function (s) {
        return s.toCSS();
    }).join('').trim();
};
var argument8 = r_2;
var argument9 = r_3;
var base_0 = ["%,","FN","}Xy","9tL","H5v"]
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
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["%,","FN","}Xy","9tL","H5v"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test828.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)