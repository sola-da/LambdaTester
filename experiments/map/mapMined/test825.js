





var callbackArguments = [];
var argument1 = function (propName) {
 callbackArguments.push(arguments) 

    return fn(propName);
};
var argument2 = [607,607,-100,893,823,-100,49,893];
var argument3 = true;
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    var entry;
    if (item.webkitGetAsEntry) {
        entry = item.webkitGetAsEntry();
        if (entry) {
            entry._file = item.getAsFile();
        }
        return entry;
    }
    return item.getAsEntry();
};
var argument5 = function (value, key) {
 callbackArguments.push(arguments) 

    aNames.push(key);
};
var argument6 = function (col) {
 callbackArguments.push(arguments) 

    return '`' + col + '`';
};
var argument7 = null;
var base_0 = ["R8","h"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["R8","h"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["R8","h"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["R8","h"]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test825.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)