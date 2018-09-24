





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d && isValue(d.value);
};
var argument2 = ["M",">9;H",100,59];
var argument3 = [823,607,705,59,893,607,627];
var argument4 = function (id) {
 callbackArguments.push(arguments) 

    return this.globals[id].activate && bound.globals.indexOf(id) === -1;
};
var argument5 = "pQR$e%";
var argument6 = function (gravatarService) {
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
var argument7 = function (item) {
 callbackArguments.push(arguments) 

    return !this.requiresMap.hasOwnProperty(item);
};
var argument8 = false;
var base_0 = ["52u","v",242]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["52u","v",242]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["52u","v",242]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test270.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)