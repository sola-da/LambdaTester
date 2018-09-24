





var callbackArguments = [];
var argument1 = function (value, index, list) {
 callbackArguments.push(arguments) 

    return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
    };
};
var argument2 = 8.020752015416555e+307;
var argument3 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument4 = function (cookie) {
 callbackArguments.push(arguments) 

    return cookie.replace(_this.cookieNamePrefix, '');
};
var argument5 = r_2;
var argument6 = "tbL";
var argument7 = function (i) {
 callbackArguments.push(arguments) 

    return i.name + '="' + i.value + '"';
};
var argument8 = 1.6942728875080918e+308;
var argument9 = false;
var base_0 = ["C","6","(","a","BHG","+","b","lN","I"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C","6","(","a","BHG","+","b","lN","I"]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C","6","(","a","BHG","+","b","lN","I"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C","6","(","a","BHG","+","b","lN","I"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test892.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)