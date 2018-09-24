





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstChild && elem.firstChild.nodeType === 1) {
        elem = elem.firstChild;
    }
    return elem;
};
var argument2 = false;
var argument3 = null;
var argument4 = function (el, i) {
 callbackArguments.push(arguments) 

    return el.nTable;
};
var argument5 = function (el, i) {
 callbackArguments.push(arguments) 

    return fn.call(el, i, el);
};
var argument6 = function (r) {
 callbackArguments.push(arguments) 

    var labels = options.labels;
    var units = options.units;
    return {
        units: r[units],
        labels: r[labels],
        hexcolor: r.hexcolor
    };
};
var base_0 = [126,655,618,25,"qe","q",714]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,655,618,25,"qe","q",714]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test847.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)