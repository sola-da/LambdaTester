





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    var rgb = c.rgb();
    r += rgb.r;
    g += rgb.g;
    b += rgb.b;
    a += rgb.a;
};
var argument2 = function (variable) {
 callbackArguments.push(arguments) 

    variable.defs.slice(1).forEach(function (def) {
        reportRedeclaration(def.name, def.name.name);
    });
};
var argument3 = true;
var argument4 = function (e) {
 callbackArguments.push(arguments) 

    if (d !== e) {
        assert.ok(spec.metric(d.center(), e.center()) > spec.clusterDistance);
    }
};
var argument5 = "";
var argument6 = function (k) {
 callbackArguments.push(arguments) 

    if (old[k] === undefined)
        return;
    console.log('Style change \'' + k + '\', newValue \'' + now[k] + '\', was \'' + old[k] + '\'', ev.target);
};
var argument7 = r_3;
var base_0 = [-100,655,"7",242,783]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,655,"7",242,783]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,655,"7",242,783]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,655,"7",242,783]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test747.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)