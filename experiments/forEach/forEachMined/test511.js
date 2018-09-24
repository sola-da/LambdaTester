





var callbackArguments = [];
var argument1 = function (length) {
 callbackArguments.push(arguments) 

    var lengthValue = this[length];
    if (null != lengthValue)
        if ('number' == typeof lengthValue)
            size[length] = lengthValue;
        else if (refSize) {
            var refLength = refSize[length];
            null != refLength && (size[length] = lengthValue.resolve(refLength));
        }
};
var argument2 = function (callback) {
 callbackArguments.push(arguments) 

    callback(data);
};
var argument3 = function (node) {
 callbackArguments.push(arguments) 

    if (index) {
        parent.insertBefore(node, index.nextSibling);
    } else {
        parent.replaceChild(node, element);
    }
    index = node;
};
var argument4 = r_2;
var argument5 = function (plot) {
 callbackArguments.push(arguments) 

    this._collectPlotAxesDataCells(plot, dataCellsByAxisTypeThenIndex);
};
var argument6 = null;
var argument7 = r_2;
var base_0 = [49,893,49,655]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,893,49,655]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,893,49,655]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,893,49,655]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test511.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)