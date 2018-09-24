





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument2 = function (d, i) {
 callbackArguments.push(arguments) 

    return !data[i].disabled;
};
var argument3 = [893,655,607,"0","D|>7wS",":Q"];
var argument4 = function (e) {
 callbackArguments.push(arguments) 

    return e.indexOf('Error') !== 0 && e.indexOf('d3plus.js:') < 0 && e.indexOf('d3plus.min.js:') < 0;
};
var argument5 = {"2":"","49":"","59":8.823449940628329e+307,"":"","6.589145007722549e+305":3.178595172306053e+307,"3.768641008927007e+307":"","GdN":4.592011325091412e+307,"1.487414851246735e+308":618};
var argument6 = function (handler) {
 callbackArguments.push(arguments) 

    return handler && (!event.e || handler.e == event.e) && (!event.ns || matcher.test(handler.ns)) && (!fn || zid(handler.fn) === zid(fn)) && (!selector || handler.sel == selector);
};
var base_0 = [0,"_BulD","j","l","nZR","[<","?"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,"_BulD","j","l","nZR","[<","?"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,"_BulD","j","l","nZR","[<","?"]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,"_BulD","j","l","nZR","[<","?"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test561.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)