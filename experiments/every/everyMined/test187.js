





var callbackArguments = [];
var argument1 = function (v, i) {
 callbackArguments.push(arguments) 

    return v === a2[i];
};
var argument2 = function (element) {
 callbackArguments.push(arguments) 

    return this.indexOf(element) >= 0;
};
var argument3 = null;
var argument4 = {"607":"","":59,"R":" y]","1.0217356273296604e+308":5.122795157089233e+307,"g":25,"Y":"7I;","^ ":"o","8.942033545152817e+307":"x"};
var argument5 = function (op) {
 callbackArguments.push(arguments) 

    return InsertOp.isInsert(op);
};
var argument6 = false;
var argument7 = true;
var argument8 = function (x) {
 callbackArguments.push(arguments) 

    return x.length > 0;
};
var argument9 = false;
var base_0 = ["v-= H","[8k"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["v-= H","[8k"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["v-= H","[8k"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["v-= H","[8k"]
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
require("fs").writeFileSync("./experiments/every/everyMined/test187.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)