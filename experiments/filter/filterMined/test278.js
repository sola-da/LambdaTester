





var callbackArguments = [];
var argument1 = function (elem) {
 callbackArguments.push(arguments) 

    return elem !== '.';
};
var argument2 = 2.5895375696816313e+307;
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    var match = false;
    for (var i = 0; i < vars.id.nesting.length; i++) {
        var level = vars.id.nesting[i];
        match = level in d && d[level] === vars.focus.value[0];
        if (match) {
            depth = i;
            break;
        }
    }
    return match;
};
var argument4 = "";
var argument5 = null;
var argument6 = function (className) {
 callbackArguments.push(arguments) 

    return classNames[className];
};
var argument7 = function (x) {
 callbackArguments.push(arguments) 

    return x !== undefined && x !== null;
};
var base_0 = [25,714,-1,607,25,100,607,607,213,969]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,714,-1,607,25,100,607,607,213,969]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,714,-1,607,25,100,607,607,213,969]
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test278.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)