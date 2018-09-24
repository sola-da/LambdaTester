





var callbackArguments = [];
var argument1 = function (b) {
 callbackArguments.push(arguments) 

    return !b.isEmpty();
};
var argument2 = null;
var argument3 = function (d, i) {
 callbackArguments.push(arguments) 

    return i === 0;
};
var argument4 = null;
var argument5 = [" ","9","Z>`B!","0","q","l","Sl"];
var argument6 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument7 = 3.044210485206433e+307;
var argument8 = function (k) {
 callbackArguments.push(arguments) 

    return !now[k];
};
var base_0 = ["L","i2","Q","tr3$","5","^q1","jx","C","l"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["L","i2","Q","tr3$","5","^q1","jx","C","l"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["L","i2","Q","tr3$","5","^q1","jx","C","l"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["L","i2","Q","tr3$","5","^q1","jx","C","l"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test669.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)