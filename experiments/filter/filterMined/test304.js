





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return new RegExp('^' + weekday, 'i').test(item);
};
var argument2 = 1.3288484435214889e+308;
var argument3 = null;
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    return !_.containsObject(array2, value, comparison);
};
var argument5 = null;
var argument6 = null;
var argument7 = function (gravatarService) {
 callbackArguments.push(arguments) 

    return function (email, size) {
        if (!email) {
            return gravatarService.url('', {
                default: 'mm',
                size: size
            });
        }
        return gravatarService.url(email, {
            default: 'wavatar',
            size: size
        });
    };
};
var argument8 = function (d) {
 callbackArguments.push(arguments) 

    return d[vars.id.value] == id;
};
var argument9 = [0,122,-1];
var argument10 = r_2;
var base_0 = [460,-1,126,122]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,-1,126,122]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,-1,126,122]
var r_2= undefined
try {
r_2 = base_2.filter(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test304.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)