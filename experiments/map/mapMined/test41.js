





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument2 = r_0;
var argument3 = function (val) {
 callbackArguments.push(arguments) 

    return keyMap[val];
};
var argument4 = null;
var argument5 = 783;
var argument6 = function (line) {
 callbackArguments.push(arguments) 

    return '  ' + line;
};
var argument7 = function (val, i) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var base_0 = ["K8!","i",126,"_Hrf",1.7976931348623157e+308,"%",655,"d",";?","e"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["K8!","i",126,"_Hrf",1.7976931348623157e+308,"%",655,"d",";?","e"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["K8!","i",126,"_Hrf",1.7976931348623157e+308,"%",655,"d",";?","e"]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["K8!","i",126,"_Hrf",1.7976931348623157e+308,"%",655,"d",";?","e"]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test41.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)