





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    return textStyle[key] === paragraphStyle[key];
};
var argument2 = function (type) {
 callbackArguments.push(arguments) 

    return tokenTypes.indexOf(type) !== -1;
};
var argument3 = null;
var argument4 = [0,100,122,705,100];
var argument5 = function (v1) {
 callbackArguments.push(arguments) 

    return prevContext.fn(prevContext, v1);
};
var argument6 = null;
var argument7 = function () {
 callbackArguments.push(arguments) 

    return true;
};
var base_0 = ["d"," ","X1?2X-","v","f","F","1","c8"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["d"," ","X1?2X-","v","f","F","1","c8"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["d"," ","X1?2X-","v","f","F","1","c8"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["d"," ","X1?2X-","v","f","F","1","c8"]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyMined/test259.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)