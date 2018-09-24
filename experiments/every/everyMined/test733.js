





var callbackArguments = [];
var argument1 = function (element) {
 callbackArguments.push(arguments) 

    return this.indexOf(element) >= 0;
};
var argument2 = null;
var argument3 = "_";
var argument4 = function (op) {
 callbackArguments.push(arguments) 

    return Op.isInsert(op);
};
var argument5 = true;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var argument7 = 1.1888671946387758e+308;
var argument8 = function () {
 callbackArguments.push(arguments) 

    context = this;
};
var argument9 = r_2;
var base_0 = ["m","dh","h*X2","(c","e","{","B",">P9"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["m","dh","h*X2","(c","e","{","B",">P9"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["m","dh","h*X2","(c","e","{","B",">P9"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["m","dh","h*X2","(c","e","{","B",">P9"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyMined/test733.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)