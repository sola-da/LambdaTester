





var callbackArguments = [];
var argument1 = function (arr) {
 callbackArguments.push(arguments) 

    this._globals.push(arr);
};
var argument2 = null;
var argument3 = "";
var argument4 = function (id) {
 callbackArguments.push(arguments) 

    this._extendCore(mark, id, keyArgs);
};
var argument5 = function (role) {
 callbackArguments.push(arguments) 

    var sourceRole = role.sourceRole;
    sourceRole.isReversed && role.setIsReversed(!role.isReversed);
    !role.defaultDimensionName && sourceRole.isPreBound() && role.preBind(sourceRole.preBoundGrouping());
};
var argument6 = [100,403,969,25,157,969,627,714];
var argument7 = null;
var argument8 = function (script) {
 callbackArguments.push(arguments) 

    if (script.src.match(re)) {
        basePath = script.src.replace(re, '');
    }
};
var argument9 = null;
var base_0 = [1.7976931348623157e+308,"Q$x",618,969,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,"Q$x",618,969,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,"Q$x",618,969,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,"Q$x",618,969,893]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test80.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)