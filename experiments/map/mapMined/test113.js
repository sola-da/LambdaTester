





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return extend({}, item, { isActive: item.id === itemId });
};
var argument2 = function (elem) {
 callbackArguments.push(arguments) 

    return [
        elem.nextSibling,
        elem.parentNode
    ];
};
var argument3 = "";
var argument4 = function (localizedSymbol) {
 callbackArguments.push(arguments) 

    return regexpEscape(localizedSymbol);
};
var argument5 = false;
var argument6 = function (zone) {
 callbackArguments.push(arguments) 

    return _.extend(zone.$, { name: zone._ });
};
var argument7 = null;
var base_0 = [25,893,122,893,460,126,607]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,893,122,893,460,126,607]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,893,122,893,460,126,607]
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
require("fs").writeFileSync("./experiments/map/mapMined/test113.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)