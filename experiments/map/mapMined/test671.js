





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument2 = function (name) {
 callbackArguments.push(arguments) 

    var path = root ? Path.join(root, name) : name;
    return {
        path: path,
        name: Path.basename(path)
    };
};
var argument3 = function (x) {
 callbackArguments.push(arguments) 

    return x.charCodeAt(0);
};
var argument4 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstElementChild) {
        elem = elem.firstElementChild;
    }
    return elem;
};
var argument5 = null;
var argument6 = r_3;
var base_0 = ["r","n7^uwda","MC","=<ir","m"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["r","n7^uwda","MC","=<ir","m"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["r","n7^uwda","MC","=<ir","m"]
var r_2= undefined
try {
r_2 = base_2.map(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test671.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)