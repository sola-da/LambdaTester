





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    i++;
    arr.push(a + 3);
    return i <= 3;
};
var argument2 = true;
var argument3 = [213,49,0,403];
var argument4 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var argument5 = 1.75679541793342e+307;
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    return x.length > 0;
};
var argument7 = {"":1.7412203214946485e+307,"1.4250811791542279e+308":"","gg":"j9"};
var argument8 = r_0;
var argument9 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument10 = "h";
var base_0 = [705,1.7976931348623157e+308,122,157,714,1.7976931348623157e+308,893,714,100]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,1.7976931348623157e+308,122,157,714,1.7976931348623157e+308,893,714,100]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,1.7976931348623157e+308,122,157,714,1.7976931348623157e+308,893,714,100]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,1.7976931348623157e+308,122,157,714,1.7976931348623157e+308,893,714,100]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyMined/test946.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)