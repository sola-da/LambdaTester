





var callbackArguments = [];
var argument1 = function (dir) {
 callbackArguments.push(arguments) 

    return async.walkfiles(dir, recurse, order);
};
var argument2 = {"122":"","893":-100,"969":"","":122,"F|7":"","1.6390268341825868e+308":1.4299306810659986e+307};
var argument3 = null;
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    return args.reduce(function (obj, key) {
        obj[key] = item[key];
        return obj;
    }, {});
};
var argument5 = function (atom) {
 callbackArguments.push(arguments) 

    return atom.label || '- ';
};
var argument6 = r_0;
var argument7 = [607,705];
var argument8 = function (key) {
 callbackArguments.push(arguments) 

    return View.dirtyViews[key];
};
var argument9 = r_3;
var base_0 = ["S",213]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["S",213]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["S",213]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["S",213]
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
require("fs").writeFileSync("./experiments/map/mapMined/test694.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)