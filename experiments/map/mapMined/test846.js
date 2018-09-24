





var callbackArguments = [];
var argument1 = function (r) {
 callbackArguments.push(arguments) 

    var r1 = r.clone();
    r1.isBackwards = r.cursor == r.start;
    return r1;
};
var argument2 = true;
var argument3 = [783,126,627,49,"W`","<","jv","+]Kl"];
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument5 = function (e) {
 callbackArguments.push(arguments) 

    return e.toCSS();
};
var argument6 = "X";
var argument7 = [82,705,714,-100,893,595,100,157,823];
var argument8 = function (c) {
 callbackArguments.push(arguments) 

    return number(c);
};
var argument9 = "";
var base_0 = [100,403,"D",0,122,"1","C"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,403,"D",0,122,"1","C"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test846.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)