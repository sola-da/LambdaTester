





var callbackArguments = [];
var argument1 = function (type) {
 callbackArguments.push(arguments) 

    var axes = this.axesByType[type];
    axes && axes.forEach(this._setCartAxisScaleRange, this);
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function (obj) {
 callbackArguments.push(arguments) 

    srcFiles = srcFiles.concat(obj.srcFiles);
};
var argument5 = null;
var argument6 = false;
var argument7 = function (range, row, offset) {
 callbackArguments.push(arguments) 

    if (!range.start) {
        var column = range.offset + (offset || 0);
        firstRange = new Range(row, column, row, column + range.length);
        if (!range.length && options.start && options.start.start && options.skipCurrent != false && firstRange.isEqual(options.start)) {
            firstRange = null;
            return false;
        }
    } else
        firstRange = range;
    return true;
};
var argument8 = function (needle) {
 callbackArguments.push(arguments) 

    if (typeList.indexOf(needle) == -1) {
        hasType = false;
        return false;
    }
};
var argument9 = false;
var base_0 = [783,"Hv",0,823,"8h}","=","W"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,"Hv",0,823,"8h}","=","W"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,"Hv",0,823,"8h}","=","W"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,"Hv",0,823,"8h}","=","W"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test43.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)