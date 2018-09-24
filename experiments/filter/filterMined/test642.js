





var callbackArguments = [];
var argument1 = function (c, i) {
 callbackArguments.push(arguments) 

    var test = d3plus.util.copy(d);
    test.geometry.coordinates = [test.geometry.coordinates[i]];
    var a = vars.path.area(test);
    if (a >= vars.coords.threshold) {
        areas.push(a);
        return true;
    }
    return false;
};
var argument2 = null;
var argument3 = function (elm) {
 callbackArguments.push(arguments) 

    return !$parse(expression)(elm);
};
var argument4 = null;
var argument5 = function (match) {
 callbackArguments.push(arguments) 

    return previousMatches.indexOf(match) !== -1;
};
var argument6 = true;
var argument7 = function (e) {
 callbackArguments.push(arguments) 

    return !jsonld.compareValues(e, value);
};
var argument8 = [403,607,627,969,157,1.7976931348623157e+308,655,823,100];
var argument9 = true;
var base_0 = [122,"u`",100,"Lq","Y","r",126,157,"0R"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,"u`",100,"Lq","Y","r",126,157,"0R"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,"u`",100,"Lq","Y","r",126,157,"0R"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,"u`",100,"Lq","Y","r",126,157,"0R"]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test642.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)