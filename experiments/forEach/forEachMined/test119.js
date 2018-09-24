





var callbackArguments = [];
var argument1 = function (child) {
 callbackArguments.push(arguments) 

    obj[child.getField()] = child.getValue();
};
var argument2 = function (v) {
 callbackArguments.push(arguments) 

    if (inverseNp.isScalar) {
        v.setProperty(inverseNp.name, null);
    } else {
    }
};
var argument3 = null;
var argument4 = r_1;
var argument5 = function (fn) {
 callbackArguments.push(arguments) 

    if (!fn.only || (fn.only = 'prop' && type == 'prop') || fn.only == 'attr' && type != 'prop') {
        fn.call(elem, value, boolValue, isVal ? 'val' : curType, type);
    }
};
var argument6 = null;
var argument7 = function (key, node) {
 callbackArguments.push(arguments) 

    var nx = node.nodeData.x;
    var ny = node.nodeData.y;
    var d = 0.0001 + Math.sqrt(nx * nx + ny * ny);
    var gf = 0.0001 * that.gravity * d;
    node.layoutData.dx -= gf * nx / d;
    node.layoutData.dy -= gf * ny / d;
};
var argument8 = true;
var base_0 = [100,"oW?","Y",0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,"oW?","Y",0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,"oW?","Y",0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,"oW?","Y",0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test119.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)