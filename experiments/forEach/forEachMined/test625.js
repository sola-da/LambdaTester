





var callbackArguments = [];
var argument1 = function (p) {
 callbackArguments.push(arguments) 

    p.d3plus.ring = 1;
    var val = vars.size.value ? fetchValue(vars, p, vars.size.value) : 1;
    p.d3plus.r = radius(val);
};
var argument2 = null;
var argument3 = function (l) {
 callbackArguments.push(arguments) 

    if (l.d3plus.merged instanceof Array) {
        if (!d.d3plus.merged)
            d.d3plus.merged = [];
        d.d3plus.merged = d.d3plus.merged.concat(l.d3plus.merged);
    }
    if (l.d3plus.text)
        d.d3plus.text = l.d3plus.text;
};
var argument4 = 655;
var argument5 = function (name) {
 callbackArguments.push(arguments) 

    this._readDim(name, reader);
};
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    this._addLabel(x.color, x.name);
};
var argument7 = null;
var base_0 = [783,82,122,1.7976931348623157e+308,705]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,82,122,1.7976931348623157e+308,705]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,82,122,1.7976931348623157e+308,705]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,82,122,1.7976931348623157e+308,705]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test625.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)