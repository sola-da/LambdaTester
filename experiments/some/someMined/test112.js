





var callbackArguments = [];
var argument1 = function (match) {
 callbackArguments.push(arguments) 

    return match.route.props.ignoreScrollBehavior;
};
var argument2 = false;
var argument3 = function () {
 callbackArguments.push(arguments) 

    return true;
};
var argument4 = function (ban) {
 callbackArguments.push(arguments) 

    return user.matchesMask(ban.mask);
};
var argument5 = function (alarm) {
 callbackArguments.push(arguments) 

    return alarm.name === alarmName;
};
var argument6 = r_3;
var base_0 = ["M",1.7976931348623157e+308,"m2","W",0,"ZH",242]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["M",1.7976931348623157e+308,"m2","W",0,"ZH",242]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["M",1.7976931348623157e+308,"m2","W",0,"ZH",242]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["M",1.7976931348623157e+308,"m2","W",0,"ZH",242]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6)
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
require("fs").writeFileSync("./experiments/some/someMined/test112.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)