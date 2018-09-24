





var callbackArguments = [];
var argument1 = function (file) {
 callbackArguments.push(arguments) 

    return me._addFile(file);
};
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function (m, j) {
 callbackArguments.push(arguments) 

    if (m === n)
        i++;
};
var argument5 = null;
var argument6 = 607;
var argument7 = function (a) {
 callbackArguments.push(arguments) 

    return {
        name: a.name,
        value: a.value.eval(env)
    };
};
var argument8 = function (guest) {
 callbackArguments.push(arguments) 

    return guest.name.split(' ')[0];
};
var base_0 = [-100,"QROy",607,"f;","tW","v"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,"QROy",607,"f;","tW","v"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,"QROy",607,"f;","tW","v"]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,"QROy",607,"f;","tW","v"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test55.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)