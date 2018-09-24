





var callbackArguments = [];
var argument1 = function (patch) {
 callbackArguments.push(arguments) 

    return {
        oldCharacters: patch.newCharacters,
        oldRange: patch.newRange,
        newCharacters: patch.oldCharacters,
        newRange: patch.oldRange
    };
};
var argument2 = function (prop) {
 callbackArguments.push(arguments) 

    return makeSeries(prop);
};
var argument3 = null;
var argument4 = function (entry) {
 callbackArguments.push(arguments) 

    return entry.path;
};
var argument5 = true;
var argument6 = [157,1.7976931348623157e+308,783];
var argument7 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument8 = false;
var argument9 = r_2;
var base_0 = [969,705,100,-100,823]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test540.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)