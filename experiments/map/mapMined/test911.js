





var callbackArguments = [];
var argument1 = function (p) {
 callbackArguments.push(arguments) 

    return p.value;
};
var argument2 = "";
var argument3 = false;
var argument4 = function (k) {
 callbackArguments.push(arguments) 

    var value = variables[k];
    if (!(value instanceof tree.Value)) {
        if (!(value instanceof tree.Expression)) {
            value = new tree.Expression([value]);
        }
        value = new tree.Value([value]);
    }
    return new tree.Rule('@' + k, value, false, null, 0);
};
var argument5 = r_0;
var argument6 = false;
var argument7 = function (key) {
 callbackArguments.push(arguments) 

    return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
};
var argument8 = function (r) {
 callbackArguments.push(arguments) 

    return [
        r.id,
        r.title,
        r.seconds,
        r.message
    ];
};
var argument9 = false;
var base_0 = ["]","L+"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["]","L+"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]","L+"]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test911.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)