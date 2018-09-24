





var callbackArguments = [];
var argument1 = function (i, elm) {
 callbackArguments.push(arguments) 

    var template = $(elm).html().trim();
    var output = $.mustache(template, view, partials);
    return $(output).get();
};
var argument2 = {"213":2.2122544918536986e+307,"783":5.482203709087643e+307,"823":"Ld","":"","[t":"","4.912769922556103e+307":"","3.908393851714119e+307":"","mCd>":"","OJx5r-p4":""};
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstChild && elem.firstChild.nodeType === 1) {
        elem = elem.firstChild;
    }
    return elem;
};
var argument5 = null;
var argument6 = null;
var base_0 = [25]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
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
require("fs").writeFileSync("./experiments/map/mapMined/test677.json",JSON.stringify({"baseObjects":serialize([base_0,base_1]),"returnObjects":serialize([r_0,r_1]),"callbackArgs":callbackArguments}))
},300)