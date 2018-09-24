





var callbackArguments = [];
var argument1 = function (other) {
 callbackArguments.push(arguments) 

    return _.indexOf(other, item) >= 0;
};
var argument2 = function (x) {
 callbackArguments.push(arguments) 

    return x.length > 0;
};
var argument3 = null;
var argument4 = function (op) {
 callbackArguments.push(arguments) 

    return InsertOp.isInsert(op);
};
var argument5 = null;
var argument6 = r_2;
var argument7 = function (x) {
 callbackArguments.push(arguments) 

    return x.length > 0;
};
var argument8 = {"w":5.194196762362845e+307,"1.936277577683017e+307":"u]","":1.373038351134696e+307,"7.685315895069419e+307":1.6514874466787227e+308};
var base_0 = [460,100,460,-100,49,618,655,49,969]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,100,460,-100,49,618,655,49,969]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,100,460,-100,49,618,655,49,969]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,100,460,-100,49,618,655,49,969]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyMined/test11.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)