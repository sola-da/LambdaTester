





var callbackArguments = [];
var argument1 = function (filter) {
 callbackArguments.push(arguments) 

    return filter(json);
};
var argument2 = null;
var argument3 = {",":126};
var argument4 = function (alarm) {
 callbackArguments.push(arguments) 

    return alarm.name === alarmName;
};
var argument5 = function (v, i) {
 callbackArguments.push(arguments) 

    if (!(v instanceof Deferred)) {
        cancel(i);
        x.callback(v);
        return true;
    }
    return false;
};
var argument6 = function (route) {
 callbackArguments.push(arguments) 

    return route.props.name === routeName;
};
var base_0 = ["+",59,0,"$VT<",705,242,"{F",595,823]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["+",59,0,"$VT<",705,242,"{F",595,823]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["+",59,0,"$VT<",705,242,"{F",595,823]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["+",59,0,"$VT<",705,242,"{F",595,823]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someMined/test237.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)