





var callbackArguments = [];
var argument1 = function (line) {
 callbackArguments.push(arguments) 

    return line.search('Active') >= 0;
};
var argument2 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var argument3 = function (instance) {
 callbackArguments.push(arguments) 

    return instance.State.Name !== 'terminated';
};
var argument4 = function (region) {
 callbackArguments.push(arguments) 

    var found = false;
    if (!region.class) {
        return true;
    }
    region.class.split(' ').forEach(function (c) {
        if (classes.indexOf(c) >= 0) {
            found = true;
        }
    });
    return !found;
};
var argument5 = null;
var argument6 = 1.3356265704810275e+308;
var base_0 = [705,595]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,595]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test660.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)