





var callbackArguments = [];
var argument1 = function (field) {
 callbackArguments.push(arguments) 

    return formatValue(row[field]);
};
var argument2 = false;
var argument3 = null;
var argument4 = function (ch) {
 callbackArguments.push(arguments) 

    return ch.charCodeAt(0);
};
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    return {
        'Owner > component': item.componentName,
        'Inclusive time (ms)': roundFloat(item.time),
        'Instances': item.count
    };
};
var argument6 = function (pattern) {
 callbackArguments.push(arguments) 

    return {
        'pattern': pattern,
        'expected': '$1' + replaceMatchedValue(lineObject.afterField) + '$2'
    };
};
var base_0 = ["R","`","g_","I","RI","f::"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["R","`","g_","I","RI","f::"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test864.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)