





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    for (var i = 0, l = targets.length; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument2 = false;
var argument3 = function (x, j) {
 callbackArguments.push(arguments) 

    return j !== i;
};
var argument4 = 0;
var argument5 = false;
var argument6 = function (dirname) {
 callbackArguments.push(arguments) 

    return 0 === dirname.indexOf(last);
};
var argument7 = {"3.384836566400847e+307":"","":-1,"1.8950584054065857e+307":""};
var argument8 = null;
var argument9 = function (item) {
 callbackArguments.push(arguments) 

    return !this.requiresMap.hasOwnProperty(item);
};
var argument10 = ["30#2!;6R*","Y6h"];
var base_0 = [126,")F","$",5e-324]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,")F","$",5e-324]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,")F","$",5e-324]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,")F","$",5e-324]
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test100.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)