





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument2 = null;
var argument3 = null;
var argument4 = function (node) {
 callbackArguments.push(arguments) 

    var config = { text: lib.getText(node) };
    var panel = node.getAttribute('data-for');
    if (panel) {
        config.panel = panel;
    }
    return config;
};
var argument5 = function (key) {
 callbackArguments.push(arguments) 

    return value[key];
};
var argument6 = r_1;
var argument7 = function (nm) {
 callbackArguments.push(arguments) 

    return nm + '="' + a[nm] + '"';
};
var argument8 = null;
var base_0 = ["ll","!","a","+","u","BY;E"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test524.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)