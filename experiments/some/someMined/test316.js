





var callbackArguments = [];
var argument1 = function (sequence) {
 callbackArguments.push(arguments) 

    return sequence.hasErrorHandler();
};
var argument2 = function (attr) {
 callbackArguments.push(arguments) 

    return attr.name === 'Name' && attr.value === baseTypeName;
};
var argument3 = function (hint) {
 callbackArguments.push(arguments) 

    return splitUrl[0].indexOf(hint) > -1;
};
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    return start >= item.start && end <= item.end;
};
var argument5 = r_2;
var base_0 = ["R","BhJ","twzb","2","*Ij"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["R","BhJ","twzb","2","*Ij"]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["R","BhJ","twzb","2","*Ij"]
var r_2= undefined
try {
r_2 = base_2.some(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["R","BhJ","twzb","2","*Ij"]
var r_3= undefined
try {
r_3 = base_3.some(argument4,argument5)
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
require("fs").writeFileSync("./experiments/some/someMined/test316.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)