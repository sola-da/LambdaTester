





var callbackArguments = [];
var argument1 = function (localizedDigit) {
 callbackArguments.push(arguments) 

    return regexpEscape(localizedDigit);
};
var argument2 = ["Mn","E"];
var argument3 = function (s) {
 callbackArguments.push(arguments) 

    return s.level;
};
var argument4 = false;
var argument5 = function (node) {
 callbackArguments.push(arguments) 

    if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
        ancestors.push(node);
        return node;
    }
};
var argument6 = function (m) {
 callbackArguments.push(arguments) 

    return m.principalId;
};
var argument7 = r_1;
var argument8 = r_1;
var base_0 = [59,969,59,157]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,969,59,157]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test657.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)