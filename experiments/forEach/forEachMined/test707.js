





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    var reversed = esrever.reverse(item.input);
    equal(reversed, item.expected, item.description);
    equal(esrever.reverse(reversed), item.input, 'Reversing twice: ' + item.description);
};
var argument2 = 126;
var argument3 = function (log) {
 callbackArguments.push(arguments) 

    angular.forEach(log, function (logItem) {
        errors.push('MOCK $log (' + logLevel + '): ' + String(logItem) + '\n' + (logItem.stack || ''));
    });
};
var argument4 = ["m","^=","I"];
var argument5 = false;
var argument6 = function (value, key) {
 callbackArguments.push(arguments) 

    if (value)
        xhr.setRequestHeader(key, value);
};
var argument7 = function (v) {
 callbackArguments.push(arguments) 

    v.angle = Math.atan2(v[0] - cx, v[1] - cy);
};
var argument8 = "9";
var base_0 = ["=","R","6F)l","oV?"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=","R","6F)l","oV?"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=","R","6F)l","oV?"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=","R","6F)l","oV?"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test707.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)