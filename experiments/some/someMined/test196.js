





var callbackArguments = [];
var argument1 = function (colObj) {
 callbackArguments.push(arguments) 

    return !!colObj.name.match(/\.col1$/);
};
var argument2 = function (r) {
 callbackArguments.push(arguments) 

    return comparePoints(r.start, start) <= 0 && comparePoints(r.end, end) >= 0;
};
var argument3 = null;
var argument4 = function (attr) {
 callbackArguments.push(arguments) 

    return attr.name === 'Name' && attr.value === baseTypeName;
};
var argument5 = null;
var argument6 = function cb_some(r) {
 callbackArguments.push(arguments) 

    return deepEqual(r, rule);
};
var argument7 = [705,595,"SN",714,"vq@5"];
var base_0 = [0,-1,122,655,823,82,82,100]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,-1,122,655,823,82,82,100]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,-1,122,655,823,82,82,100]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,-1,122,655,823,82,82,100]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someMined/test196.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)