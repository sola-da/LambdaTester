





var callbackArguments = [];
var argument1 = function (res, attr) {
 callbackArguments.push(arguments) 

    res[tokenName(attr)] = attr.value;
    return res;
};
var argument2 = function (total, xB) {
 callbackArguments.push(arguments) 

    return total + (xB > xA ? 0 : xB < xA ? 1 : 0.5);
};
var argument3 = {"100":3.003303996301476e+307,"627":"Pi","969":0,"7.995285733345337e+307":6.734809290859912e+307};
var argument4 = function (previousValue, currentValue) {
 callbackArguments.push(arguments) 

    return previousValue + currentValue;
};
var argument5 = [893,969,213,823,607,100,100];
var argument6 = function (previousValue, currentValue) {
 callbackArguments.push(arguments) 

    return previousValue + currentValue;
};
var argument7 = null;
var base_0 = [655,-100,59,157,607,714,25,100,0]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,-100,59,157,607,714,25,100,0]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,-100,59,157,607,714,25,100,0]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,-100,59,157,607,714,25,100,0]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test701.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)