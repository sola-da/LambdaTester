





var callbackArguments = [];
var argument1 = function (a, b) {
 callbackArguments.push(arguments) 

    i++;
    if (i <= 4) {
        arr.push(a + 3);
    }
    ;
    return b;
};
var argument2 = true;
var argument3 = true;
var argument4 = function (a, b) {
 callbackArguments.push(arguments) 

    return (a || '').toString() + (b || '').toString();
};
var argument5 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument6 = false;
var argument7 = true;
var argument8 = function (a, b) {
 callbackArguments.push(arguments) 

    i++;
    if (i <= 4) {
        arr.push(a + 3);
    }
    ;
    return b;
};
var argument9 = null;
var argument10 = {"460":"i","714":607,"893":"","4.829664077368389e+307":460,":":"Wf","1.0083141310803632e+308":1.6640215254899868e+308,"Q":"[","":"","7.79974405171124e+307":"#","-1":"7}"};
var base_0 = [0,705,82,607]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,705,82,607]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,705,82,607]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,705,82,607]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightMined/test681.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)