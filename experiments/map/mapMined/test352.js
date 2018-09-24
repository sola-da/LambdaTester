





var callbackArguments = [];
var argument1 = function (colGroup) {
 callbackArguments.push(arguments) 

    return '' + colGroup[0].v;
};
var argument2 = function (e) {
 callbackArguments.push(arguments) 

    return e.eval(env);
};
var argument3 = null;
var argument4 = r_0;
var argument5 = function (p) {
 callbackArguments.push(arguments) 

    p.isNumber = vg.isNumber(p[1]);
    return p;
};
var argument6 = true;
var argument7 = null;
var argument8 = function (atom) {
 callbackArguments.push(arguments) 

    return atom.label;
};
var argument9 = r_0;
var base_0 = [714,122,460,-1,843,823,403,157]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,122,460,-1,843,823,403,157]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,122,460,-1,843,823,403,157]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,122,460,-1,843,823,403,157]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test352.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)