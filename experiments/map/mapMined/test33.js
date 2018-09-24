





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    this.end = getElementStyles(this.el[0]);
    this.diff = styleDifference(this.start, this.end);
    return this;
};
var argument3 = {"100":"@","1.2559734900288215e+308":82,"":"fDi","9r":""};
var argument4 = null;
var argument5 = function (v, k) {
 callbackArguments.push(arguments) 

    return [[
            k,
            v
        ]];
};
var argument6 = null;
var argument7 = function (key) {
 callbackArguments.push(arguments) 

    return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
};
var argument8 = {"59":843,"100":"=","403":"","843":2.791761390733555e+307,"":"","YaK[":"","B":1.1684098253028035e+308};
var argument9 = false;
var base_0 = [-1,49,607,213,403]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,49,607,213,403]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,49,607,213,403]
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
require("fs").writeFileSync("./experiments/map/mapMined/test33.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)