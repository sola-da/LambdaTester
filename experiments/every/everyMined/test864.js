





var callbackArguments = [];
var argument1 = function (kp) {
 callbackArguments.push(arguments) 

    return initialValues[kp.name] != null;
};
var argument2 = true;
var argument3 = false;
var argument4 = function (other) {
 callbackArguments.push(arguments) 

    return _.indexOf(other, item) >= 0;
};
var argument5 = null;
var argument6 = ["u","Ep","8","2}","h","6d","a","g",":"];
var argument7 = function (t) {
 callbackArguments.push(arguments) 

    return d[t] >= filter[t].min && d[t] <= filter[t].max;
};
var argument8 = [618,-100];
var argument9 = r_0;
var argument10 = function (dep) {
 callbackArguments.push(arguments) 

    return list[dep];
};
var argument11 = 2.6821213003992284e+307;
var argument12 = null;
var base_0 = ["34E",",&","X"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["34E",",&","X"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["34E",",&","X"]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["34E",",&","X"]
var r_3= undefined
try {
r_3 = base_3.every(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/every/everyMined/test864.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)