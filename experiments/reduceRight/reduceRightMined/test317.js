





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
var argument2 = 25;
var argument3 = "Qx";
var argument4 = function (acc, parent) {
 callbackArguments.push(arguments) 

    return acc + parent.name + '.';
};
var argument5 = "(m";
var argument6 = {"242":"W%","627":1.680555240321841e+308,",v":-100,"":"","1.3581196784202991e+308":""};
var argument7 = function (a, b) {
 callbackArguments.push(arguments) 

    i++;
    if (i <= 4) {
        arr.push(a + 3);
    }
    ;
    return b;
};
var argument8 = r_2;
var argument9 = function (a, b) {
 callbackArguments.push(arguments) 

    if (a)
        visited[a] = true;
    if (b)
        visited[b] = true;
    return 0;
};
var argument10 = null;
var base_0 = [893,607,25,126,213,49,893,82,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,607,25,126,213,49,893,82,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,607,25,126,213,49,893,82,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,607,25,126,213,49,893,82,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightMined/test317.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)