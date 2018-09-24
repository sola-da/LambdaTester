





var callbackArguments = [];
var argument1 = function (key, node) {
 callbackArguments.push(arguments) 

    node.layoutData.dx *= that.speed;
    node.layoutData.dy *= that.speed;
};
var argument2 = null;
var argument3 = true;
var argument4 = function (property) {
 callbackArguments.push(arguments) 

    if (envConfig.hasOwnProperty(property)) {
        configApp(appObj, property, envConfig[property]);
    }
};
var argument5 = function (el) {
 callbackArguments.push(arguments) 

    el._walk(visitor);
};
var argument6 = function (callback, event) {
 callbackArguments.push(arguments) 

    if ([
            'select',
            'click',
            'hoverNode'
        ].indexOf(String(event)) >= 0) {
        network.on(event, callback);
    }
};
var argument7 = true;
var argument8 = false;
var base_0 = ["$B","}4","=","%",";","Y7","q%","b<","]"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$B","}4","=","%",";","Y7","q%","b<","]"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$B","}4","=","%",";","Y7","q%","b<","]"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$B","}4","=","%",";","Y7","q%","b<","]"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test617.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)