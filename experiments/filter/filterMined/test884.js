





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    return !_.containsObject(array2, value, comparison);
};
var argument2 = {"843":"","AvV":1.1922796025987186e+308,"1.471500690587278e+308":893,"1.4384969624433935e+308":893,"1.9498792984886692e+307":3.1235007037217994e+307,"k(@":"","M;yDU=":"","q":1.646262538089801e+308};
var argument3 = function () {
 callbackArguments.push(arguments) 

    var i = 0;
    for (; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument4 = false;
var argument5 = function (f) {
 callbackArguments.push(arguments) 

    return !!f;
};
var argument6 = "!g4";
var argument7 = function (dirname) {
 callbackArguments.push(arguments) 

    return 0 === dirname.indexOf(last);
};
var argument8 = r_0;
var argument9 = true;
var base_0 = ["]W","_","5","5","g"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["]W","_","5","5","g"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]W","_","5","5","g"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test884.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)