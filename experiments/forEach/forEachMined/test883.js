





var callbackArguments = [];
var argument1 = function (o) {
 callbackArguments.push(arguments) 

    out.push(serialize(o));
};
var argument2 = function (code) {
 callbackArguments.push(arguments) 

    unops[code] = new Function('x', 'return ' + unop(code) + ' x;');
};
var argument3 = r_1;
var argument4 = r_0;
var argument5 = function (value, name) {
 callbackArguments.push(arguments) 

    if (name === 'view' || name === 'init' || name === 'as') {
        return;
    }
    utils.prop(view, name, value);
};
var argument6 = function (e) {
 callbackArguments.push(arguments) 

    exported[e] = true;
};
var base_0 = ["Ow4w","5c","z","*X"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Ow4w","5c","z","*X"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Ow4w","5c","z","*X"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Ow4w","5c","z","*X"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test883.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)