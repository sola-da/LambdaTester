





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
};
var argument2 = null;
var argument3 = true;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument5 = 100;
var argument6 = null;
var argument7 = function (e) {
 callbackArguments.push(arguments) 

    return e === t ? null : e;
};
var argument8 = r_0;
var argument9 = [49,213,49,100,82,714,595,823,823];
var argument10 = function (d) {
 callbackArguments.push(arguments) 

    return d.name;
};
var argument11 = false;
var argument12 = false;
var base_0 = [-1,213,0,705,126,893,242,126,100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,213,0,705,126,893,242,126,100]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,213,0,705,126,893,242,126,100]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,213,0,705,126,893,242,126,100]
var r_3= undefined
try {
r_3 = base_3.map(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/map/mapMined/test832.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)