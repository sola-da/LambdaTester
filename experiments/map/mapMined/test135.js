





var callbackArguments = [];
var argument1 = function (type) {
 callbackArguments.push(arguments) 

    return compileType(env, type);
};
var argument2 = function (r) {
 callbackArguments.push(arguments) 

    var p = r.cursor;
    var line = session.getLine(p.row);
    var spaceOffset = line.substr(p.column).search(/\S/g);
    if (spaceOffset == -1)
        spaceOffset = 0;
    if (p.column > maxCol)
        maxCol = p.column;
    if (spaceOffset < minSpace)
        minSpace = spaceOffset;
    return spaceOffset;
};
var argument3 = null;
var argument4 = null;
var argument5 = function (comp) {
 callbackArguments.push(arguments) 

    return pvc_PercentValue.parse(comp);
};
var argument6 = function (value) {
 callbackArguments.push(arguments) 

    return (isFunc ? method : value[method]).apply(value, args);
};
var argument7 = r_1;
var argument8 = 627;
var base_0 = ["j","D6","qq","Z2y"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["j","D6","qq","Z2y"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["j","D6","qq","Z2y"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["j","D6","qq","Z2y"]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test135.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)