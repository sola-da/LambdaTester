





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument2 = "";
var argument3 = "li";
var argument4 = function (other) {
 callbackArguments.push(arguments) 

    return _.contains(other, item);
};
var argument5 = null;
var argument6 = function (v1) {
 callbackArguments.push(arguments) 

    return prevContext.fn(prevContext, v1);
};
var argument7 = r_0;
var argument8 = function (op) {
 callbackArguments.push(arguments) 

    return Op.isInsert(op);
};
var argument9 = r_0;
var base_0 = ["A{@",";b","AI",100,893,0,893,"B",893]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["A{@",";b","AI",100,893,0,893,"B",893]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["A{@",";b","AI",100,893,0,893,"B",893]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["A{@",";b","AI",100,893,0,893,"B",893]
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
require("fs").writeFileSync("./experiments/every/everyMined/test314.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)