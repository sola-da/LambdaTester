





var callbackArguments = [];
var argument1 = function (elem) {
 callbackArguments.push(arguments) 

    return elem.selected;
};
var argument2 = false;
var argument3 = null;
var argument4 = function (byte) {
 callbackArguments.push(arguments) 

    return String.fromCharCode(byte);
};
var argument5 = [-100,"F7","1","5","H",25];
var argument6 = function (call) {
 callbackArguments.push(arguments) 

    return call.object;
};
var argument7 = r_1;
var argument8 = function (key) {
 callbackArguments.push(arguments) 

    var h = {
            label: key,
            units: data[key]
        };
    return h;
};
var base_0 = ["=","!","`k","+<"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=","!","`k","+<"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test234.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)