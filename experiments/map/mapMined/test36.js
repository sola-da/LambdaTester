





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument2 = null;
var argument3 = function (d, i) {
 callbackArguments.push(arguments) 

    return +value.call(pie, d, i);
};
var argument4 = r_1;
var argument5 = function (r) {
 callbackArguments.push(arguments) 

    return [
        r.id,
        r.ip,
        r.name,
        r.bannedby,
        r.reason
    ];
};
var argument6 = null;
var argument7 = function (row) {
 callbackArguments.push(arguments) 

    return fields.map(function (field) {
        return formatValue(row[field]);
    }).join(delimiter);
};
var argument8 = r_3;
var argument9 = null;
var base_0 = [82,595,0,-100,655,82,627,122]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,595,0,-100,655,82,627,122]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,595,0,-100,655,82,627,122]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/map/mapMined/test36.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)