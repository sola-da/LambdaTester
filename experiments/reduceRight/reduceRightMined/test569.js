





var callbackArguments = [];
var argument1 = function (acc, parent) {
 callbackArguments.push(arguments) 

    return acc + parent.name + '.';
};
var argument2 = ["&U",627,"pV5",59,1.7976931348623157e+308,242,"5<6z",242];
var argument3 = r_0;
var argument4 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument5 = ["J","5",893,"W"];
var argument6 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument7 = function (a, b) {
 callbackArguments.push(arguments) 

    return (a || '').toString() + (b || '').toString();
};
var argument8 = {"242":5.717861577368829e+307,"893":49,"IaRsl":"","1.3825082247363485e+308":1.6599931099230997e+308,"W":5.4258665121503745e+306,"-1":6.699336381388152e+307,"1.4231370878050593e+306":969,"zE":1.4328261716464415e+307,"":""};
var argument9 = ["%",49,655,"T","xQ!!F",25,"7","W"];
var base_0 = [460,25,157,100,-100,655,157]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,25,157,100,-100,655,157]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,25,157,100,-100,655,157]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,25,157,100,-100,655,157]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightMined/test569.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)