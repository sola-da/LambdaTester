





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    return parseInt(c, 16);
};
var argument2 = {"":"dB"};
var argument3 = 655;
var argument4 = function (c) {
 callbackArguments.push(arguments) 

    return '    - ' + c + ' - ' + require('./' + c).usage;
};
var argument5 = null;
var argument6 = r_0;
var argument7 = function (stop) {
 callbackArguments.push(arguments) 

    return Color(stop[1]);
};
var argument8 = false;
var argument9 = function (v) {
 callbackArguments.push(arguments) 

    if (!v.sentence) {
        v.sentence = v.name + ' is related to ' + result.name;
    }
    return v;
};
var base_0 = ["C","h0}"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C","h0}"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test429.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)