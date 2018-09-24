





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return typeof deps[d] === 'string';
};
var argument2 = function (a) {
 callbackArguments.push(arguments) 

    return a[vars.id.value] === data[i][vars.id.value];
};
var argument3 = [893,714];
var argument4 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    return ids.indexOf(d[vars.id.value]) >= 0;
};
var base_0 = [655,213,49,25,403,627,100,403]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,213,49,25,403,627,100,403]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,213,49,25,403,627,100,403]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,213,49,25,403,627,100,403]
var r_3= undefined
try {
r_3 = base_3.filter(argument5)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test550.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)