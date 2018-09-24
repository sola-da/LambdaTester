





var callbackArguments = [];
var argument1 = function (val, i) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val
    };
};
var argument2 = function (child) {
 callbackArguments.push(arguments) 

    if (Array.isArray(child)) {
        return traverse(child);
    }
    return child;
};
var argument3 = [893,126,705,893,5e-324,126];
var argument4 = function (t) {
 callbackArguments.push(arguments) 

    return t.values;
};
var argument5 = null;
var argument6 = false;
var argument7 = function (p) {
 callbackArguments.push(arguments) 

    p.isNumber = vg.isNumber(p[1]);
    return p;
};
var argument8 = true;
var argument9 = null;
var base_0 = [823,25,705,595,823,595,607,823]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,25,705,595,823,595,607,823]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/map/mapMined/test247.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)