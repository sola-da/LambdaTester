





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return resp.items.indexOf(item.data) !== -1;
};
var argument2 = function (element, index, array) {
 callbackArguments.push(arguments) 

    return array.indexOf(element) >= index;
};
var argument3 = "-";
var argument4 = function (b) {
 callbackArguments.push(arguments) 

    return checks.indexOf(b[vars.id.value]) >= 0;
};
var argument5 = true;
var argument6 = function (item, index) {
 callbackArguments.push(arguments) 

    return array.indexOf(item) === index;
};
var argument7 = null;
var argument8 = r_3;
var base_0 = [100,157,25,-100,823,1.7976931348623157e+308,-1,25]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,157,25,-100,823,1.7976931348623157e+308,-1,25]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,157,25,-100,823,1.7976931348623157e+308,-1,25]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,157,25,-100,823,1.7976931348623157e+308,-1,25]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test784.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)