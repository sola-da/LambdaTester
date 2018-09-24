





var callbackArguments = [];
var argument1 = function (o) {
 callbackArguments.push(arguments) 

    out.push(serialize(o));
};
var argument2 = null;
var argument3 = [823,403,705,126,893];
var argument4 = function (key, node) {
 callbackArguments.push(arguments) 

    var nx = node.nodeData.x;
    var ny = node.nodeData.y;
    var d = 0.0001 + Math.sqrt(nx * nx + ny * ny);
    var gf = 0.0001 * that.gravity * d;
    node.layoutData.dx -= gf * nx / d;
    node.layoutData.dy -= gf * ny / d;
};
var argument5 = function (node) {
 callbackArguments.push(arguments) 

    parent.insertBefore(node, index.nextSibling);
    index = node;
};
var argument6 = "";
var argument7 = function (tok) {
 callbackArguments.push(arguments) 

    isundef(funct, 'W117', tok.token, tok.id);
};
var base_0 = ["u","|Cz)rf",213,59,"[5"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["u","|Cz)rf",213,59,"[5"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["u","|Cz)rf",213,59,"[5"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["u","|Cz)rf",213,59,"[5"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test723.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)