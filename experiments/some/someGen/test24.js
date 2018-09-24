





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = {"0":1.0725761664822011e+308,"122":1.1646923884270834e+308,"403":"'|","969":"Hd","-1":627,"6.35835422689131e+307":6.902941210924748e+307,"4.0863954658899997e+307":1.0404908139264613e+308,"":1.1933243873818743e+308,"3.7778250210149413e+307":1.7911634845290224e+308}
argument2[1.6798476101238045e+308] = "7"
base_0[1] = ""
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = {"157":5.976182138529715e+307,"6.535366459651043e+307":1.7976931348623157e+308," ":">","-^":"K","FuR":"df","1.6084703744001822e+308":823}
base_1 = 82
return a-b-c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = {"122":1.6269986819458887e+308,"2.682356608585937e+307":"","Yn":"","|hML":126,"z":82,"rKA=":82}
base_2[9] = {"25":1.0432927967811147e+308,"969":"uN","6.393164411584145e+307":969,"1.2497306840197869e+308":5.592556221293803e+307,"":-1,"cG'":";ww{1F","6.829500784486032e+307":"","7.981824869836094e+307":""}
return a*b*c
};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = 8.46367173774386e+307
base_3[5] = null
base_3[5] = [49]
return a*b+c
};
var base_0 = [618,"26",157,213]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,"26",157,213]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,"26",157,213]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,"26",157,213]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test24.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)