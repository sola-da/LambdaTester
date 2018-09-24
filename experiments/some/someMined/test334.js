





var callbackArguments = [];
var argument1 = function (es) {
 callbackArguments.push(arguments) 

    return e.entityAspect.entityState === es;
};
var argument2 = function (fk, i) {
 callbackArguments.push(arguments) 

    var keyProp = keyProps[i].name;
    var keyVal = parentEntity.getProperty(keyProp);
    var fkVal = a.getProperty(fk);
    return keyVal !== fkVal;
};
var argument3 = null;
var argument4 = [25,82,607,-1,705,627,-1,"ea2|","V6","j"];
var argument5 = function (haystack) {
 callbackArguments.push(arguments) 

    return contains(haystack, needle);
};
var argument6 = null;
var argument7 = true;
var argument8 = function (prop) {
 callbackArguments.push(arguments) 

    nextValue = nextValue.getProperty(prop);
    return nextValue == null;
};
var argument9 = [655,"=","g","]"];
var argument10 = "D";
var base_0 = [705,969,"K","8",783]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,969,"K","8",783]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,969,"K","8",783]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,969,"K","8",783]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someMined/test334.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)