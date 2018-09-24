





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d && isValue(d.value);
};
var argument2 = false;
var argument3 = [25,100,0,0,403,714];
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return isTargetToShow(d.id);
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    return $.data(this, 'ui-droppable').options.scope === scope;
};
var argument6 = {"893":1.7053142137069174e+308,"1.105819147433422e+308":1.5420456327115867e+308,"`":"","3.833605058530322e+306":"","":"&","(":"G","3.1708111789531714e+306":7.238389487403282e+307};
var argument7 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var base_0 = [618,705,5e-324,607,460,0,25,-100,25]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,705,5e-324,607,460,0,25,-100,25]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,705,5e-324,607,460,0,25,-100,25]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,705,5e-324,607,460,0,25,-100,25]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test833.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)