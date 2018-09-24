





var callbackArguments = [];
var argument1 = function (oldDatum) {
 callbackArguments.push(arguments) 

    data_processDatumAtoms.call(this, oldDatum, !1, !0);
};
var argument2 = 4.558012308671257e+307;
var argument3 = function (widget) {
 callbackArguments.push(arguments) 

    if (!widget._destroyed) {
        if (widget.destroyRecursive) {
            widget.destroyRecursive();
        } else if (widget.destroy) {
            widget.destroy();
        }
    }
};
var argument4 = r_0;
var argument5 = function (subfile) {
 callbackArguments.push(arguments) 

    pushFile(subfile);
};
var argument6 = r_0;
var argument7 = null;
var argument8 = function (cell, i) {
 callbackArguments.push(arguments) 

    if (cell.index >= 0) {
        cell.index += 1;
    } else {
        console.debug('Error:IndirectSelection.addRowSelectCell()-  cell ' + i + ' has no index!');
    }
};
var argument9 = 7.486565416860176e+306;
var base_0 = ["6-","e","ow","+",">P","J"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["6-","e","ow","+",">P","J"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["6-","e","ow","+",">P","J"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["6-","e","ow","+",">P","J"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test46.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)