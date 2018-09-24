





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    spec[key] = compileType(env, type.fields[key]);
};
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function (key, node) {
 callbackArguments.push(arguments) 

    var nx = node.nodeData.x;
    var ny = node.nodeData.y;
    var d = 0.0001 + Math.sqrt(nx * nx + ny * ny);
    var gf = 0.0001 * that.gravity * d;
    node.layoutData.dx -= gf * nx / d;
    node.layoutData.dy -= gf * ny / d;
};
var argument5 = r_0;
var argument6 = false;
var argument7 = function (id) {
 callbackArguments.push(arguments) 

    var axisPanel = axesPanels[id], sizes = sizesMaxByAxisId[id], ol = 'x' === axisPanel.axis.orientation ? 'height' : 'width';
    axisPanel.size = axisPanel.size.clone().set(ol, sizes.axis);
    var titlePanel = axisPanel.titlePanel;
    titlePanel && (titlePanel.size = titlePanel.size.clone().set(ol, sizes.title));
};
var argument8 = function (element) {
 callbackArguments.push(arguments) 

    if (element.nodeType === 1)
        children.push(element);
};
var base_0 = ["DW",893,"Y","P","ELA%","+[","F<"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["DW",893,"Y","P","ELA%","+[","F<"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["DW",893,"Y","P","ELA%","+[","F<"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["DW",893,"Y","P","ELA%","+[","F<"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test771.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)