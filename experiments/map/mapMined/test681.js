





var callbackArguments = [];
var argument1 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument2 = null;
var argument3 = function (colGroup, cg) {
 callbackArguments.push(arguments) 

    colGroupsValues[cg] = colGroup.values;
    var colGroupStartIndex = colGroup.startIndex, meaIndexes = colGroupsIndexes[cg] = new Array(M);
    colGroup.measureNames.forEach(function (meaName2, localMeaIndex) {
        var meaIndex = measuresInfo[meaName2].groupIndex;
        meaIndexes[meaIndex] = R + colGroupStartIndex + localMeaIndex;
    });
};
var argument4 = "{XM";
var argument5 = null;
var argument6 = function (p) {
 callbackArguments.push(arguments) 

    var t = p.trim();
    if (t && splits.indexOf(t) < 0 && t.indexOf(attrName) < 0) {
        p = t.replace(/([^:]*)(:*)(.*)/, '$1' + attrName + '$2$3');
    }
    return p;
};
var argument7 = true;
var argument8 = [595,893,213];
var argument9 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstChild && elem.firstChild.nodeType === 1) {
        elem = elem.firstChild;
    }
    return elem;
};
var base_0 = [607,969,213,607,783,627]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,969,213,607,783,627]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,969,213,607,783,627]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,969,213,607,783,627]
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test681.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)