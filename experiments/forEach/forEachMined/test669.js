





var callbackArguments = [];
var argument1 = function (stat) {
 callbackArguments.push(arguments) 

    stat._walk(visitor);
};
var argument2 = null;
var argument3 = function (majorTick, index) {
 callbackArguments.push(arguments) 

    var scene = new pvc.visual.CartesianAxisTickScene(rootScene, {
            tick: majorTick,
            tickRaw: majorTick,
            tickLabel: ticksText[index]
        });
    scene.dataIndex = index;
};
var argument4 = null;
var argument5 = [" ","9","Z>`B!","0","q","l","Sl"];
var argument6 = function (prop) {
 callbackArguments.push(arguments) 

    webshims.defineNodeNamesProperty(nodeNames, prop, {
        prop: {
            set: function (val) {
                $.attr(this, prop, val);
            },
            get: function () {
                return $.attr(this, prop) || '';
            }
        }
    });
};
var argument7 = 3.044210485206433e+307;
var argument8 = function (key) {
 callbackArguments.push(arguments) 

    if (angular.isDefined(attr[key]))
        options[key] = attr[key];
};
var base_0 = ["L","i2","Q","tr3$","5","^q1","jx","C","l"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["L","i2","Q","tr3$","5","^q1","jx","C","l"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["L","i2","Q","tr3$","5","^q1","jx","C","l"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["L","i2","Q","tr3$","5","^q1","jx","C","l"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test669.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)