





var callbackArguments = [];
var argument1 = function (fn) {
 callbackArguments.push(arguments) 

    if (fn !== 'inspect') {
        assert.isFunction(utile[fn]);
    }
};
var argument2 = false;
var argument3 = "&";
var argument4 = function (log, i) {
 callbackArguments.push(arguments) 

    if (i && log.reactID === rootID && logs[i - 1].reactID !== rootID) {
        subHistory.length && history.push(subHistory);
        subHistory = [];
    }
    subHistory.push(log);
};
var argument5 = null;
var argument6 = function (axis) {
 callbackArguments.push(arguments) 

    if (vars[axis].scale.value == 'continuous') {
        d.d3plus.id += '_' + fetchValue(vars, d, vars[axis].value);
    }
};
var argument7 = function (k) {
 callbackArguments.push(arguments) 

    ret += k + '=' + stats[k] + '\n';
};
var base_0 = ["gutv)]","<","k","v","m","(","7","%","DMi","f23"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["gutv)]","<","k","v","m","(","7","%","DMi","f23"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["gutv)]","<","k","v","m","(","7","%","DMi","f23"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["gutv)]","<","k","v","m","(","7","%","DMi","f23"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test929.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)