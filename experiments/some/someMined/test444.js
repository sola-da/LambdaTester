





var callbackArguments = [];
var argument1 = function (ban) {
 callbackArguments.push(arguments) 

    return user.matchesMask(ban.mask);
};
var argument2 = false;
var argument3 = {"100":8.990654916863262e+307};
var argument4 = function (et) {
 callbackArguments.push(arguments) 

    var group = this._findEntityGroup(et);
    ek = group && group.findEntityByKey(entityKey);
    return ek;
};
var argument5 = function (sequence) {
 callbackArguments.push(arguments) 

    return sequence.hasErrorHandler();
};
var argument6 = null;
var argument7 = function (route) {
 callbackArguments.push(arguments) 

    return route.props.name === routeName;
};
var argument8 = false;
var argument9 = r_2;
var base_0 = ["C","s"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C","s"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C","s"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C","s"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someMined/test444.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)