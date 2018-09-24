





var callbackArguments = [];
var argument1 = function (p) {
 callbackArguments.push(arguments) 

    if (!allowUnknownProperty)
        delete clone[p.name];
    try {
        p.check();
    } catch (e) {
        throwConfigError(instance, "Error");
    }
    !checkOnly && p._applyOne(instance);
};
var argument2 = function (dataCells, index) {
 callbackArguments.push(arguments) 

    var axis = this.axes[pvc.buildIndexedId(type, index)];
    axis.isBound() || axis.bind(dataCells);
};
var argument3 = "=5";
var argument4 = false;
var argument5 = function (t) {
 callbackArguments.push(arguments) 

    if (typeof t === 'string') {
        if (t[0] === '\n') {
            column = t.length - 1;
            row++;
        } else
            column += t.length;
        text += t;
    } else {
        if (!t.start)
            t.start = {
                row: row,
                column: column
            };
        else
            t.end = {
                row: row,
                column: column
            };
    }
};
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    var _group = [], isRow = false, isCol = false;
    if (Array.isArray(item.rows)) {
        _group = item.rows;
        isRow = true;
    } else if (Array.isArray(item.cols)) {
        _group = item.cols;
        isCol = true;
    }
    var from = _group[0], to = _group[_group.length - 1];
    if (isRow) {
        groupRows(from, to);
    } else if (isCol) {
        groupCols(from, to);
    }
};
var argument7 = false;
var base_0 = ["#","u","H","<","FL-SX"," !"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#","u","H","<","FL-SX"," !"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#","u","H","<","FL-SX"," !"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#","u","H","<","FL-SX"," !"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test279.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)