





var callbackArguments = [];
var argument1 = function (rule) {
 callbackArguments.push(arguments) 

    rule.splitRegex = this.createSplitterRegexp(rule.regex, flag);
};
var argument2 = 213;
var argument3 = "";
var argument4 = function (def) {
 callbackArguments.push(arguments) 

    def.value = null;
};
var argument5 = {"|r!?":6.54778453695907e+307,"3.2708075848581173e+307":""};
var argument6 = function (needle) {
 callbackArguments.push(arguments) 

    if (typeList.indexOf(needle) == -1) {
        hasType = false;
        return false;
    }
};
var argument7 = function (other) {
 callbackArguments.push(arguments) 

    var anchor = doc.createAnchor(other.row, other.column);
    _self.others.push(anchor);
};
var base_0 = [25,618,714]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,618,714]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,618,714]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,618,714]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test47.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)