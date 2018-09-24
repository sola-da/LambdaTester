





var callbackArguments = [];
var argument1 = function (ve) {
 callbackArguments.push(arguments) 

    return ve.property && (ve.property.name === propertyName || propertyName.indexOf('.') != -1 && ve.propertyName == propertyName);
};
var argument2 = 1.9626624097305882e+307;
var argument3 = false;
var argument4 = function (val) {
 callbackArguments.push(arguments) 

    return val !== 0;
};
var argument5 = {"|":"","4.0220658617968557e+307":893,"":"N","G":"a","1.6026702811810066e+308":"","-100":403,"1.5397460939832401e+308":"7t5REtQ_Ix","pC`S":6.612489646581531e+307};
var argument6 = function (instance) {
 callbackArguments.push(arguments) 

    return instance.State.Name !== 'terminated';
};
var argument7 = null;
var argument8 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument9 = null;
var base_0 = [-100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test978.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)