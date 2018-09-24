





var callbackArguments = [];
var argument1 = function (total, xA) {
 callbackArguments.push(arguments) 

    return total + getScore(xA, sampleB);
};
var argument2 = 8.881632411313154e+307;
var argument3 = null;
var argument4 = function (o, model) {
 callbackArguments.push(arguments) 

    if (!o[model])
        o[model] = 0;
    o[model]++;
    return o;
};
var argument5 = r_0;
var argument6 = [":","}","o{(","M","["];
var argument7 = function (acc, x) {
 callbackArguments.push(arguments) 

    if (acc === null) {
        return [
            x,
            opts,
            []
        ];
    } else {
        return [
            x,
            { status: 'missing' },
            [acc]
        ];
    }
};
var argument8 = function (previousValue, currentValue) {
 callbackArguments.push(arguments) 

    return previousValue + currentValue;
};
var argument9 = "";
var base_0 = [122,">","bs","ib4CY",-100,25,"0",25,"0"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,">","bs","ib4CY",-100,25,"0",25,"0"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,">","bs","ib4CY",-100,25,"0",25,"0"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,">","bs","ib4CY",-100,25,"0",25,"0"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test258.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)