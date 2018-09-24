





var callbackArguments = [];
var argument1 = function (n, j) {
 callbackArguments.push(arguments) 

    if ($.inArray(n, regrefs[k]) >= 0)
        i++;
    if ($.inArray(n, regrefs[k]) >= 0 && i > 1) {
        hashs2.splice(hashs2.indexOf(n), 1);
    }
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    var data = d.__data__;
    return data.data ? data.data : data;
};
var argument4 = function () {
 callbackArguments.push(arguments) 

    return [];
};
var base_0 = [49,"[U",783,655,893,"q"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,"[U",783,655,893,"q"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,"[U",783,655,893,"q"]
var r_2= undefined
try {
r_2 = base_2.map(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,"[U",783,655,893,"q"]
var r_3= undefined
try {
r_3 = base_3.map(argument4)
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
require("fs").writeFileSync("./experiments/map/mapMined/test137.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)