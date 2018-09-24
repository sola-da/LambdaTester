





var callbackArguments = [];
var argument1 = function (r) {
 callbackArguments.push(arguments) 

    c = r.insertCell(o.colIndex);
    c.innerHTML = '&nbsp;';
};
var argument2 = function (n, i) {
 callbackArguments.push(arguments) 

    if (i <= vars.depth.value && !d[n]) {
        d[n] = d3plus.util.uniques(d.values, n).filter(function (unique) {
            return unique && unique != 'undefined';
        })[0];
    }
};
var argument3 = function (extensionAbsId) {
 callbackArguments.push(arguments) 

    this.panel.extendAbs(this.pvMark, extensionAbsId);
};
var argument4 = r_1;
var argument5 = true;
var argument6 = function (prop) {
 callbackArguments.push(arguments) 

    parseCsdlDataProperty(entityType, prop, schema, keyNamesOnServer);
};
var base_0 = [403,783]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,783]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,783]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,783]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test687.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)