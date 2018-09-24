





var callbackArguments = [];
var argument1 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var argument2 = 705;
var argument3 = function (e) {
 callbackArguments.push(arguments) 

    if (e.entityAspect.entityManager !== em) {
        throw new Error('Only entities in this entityManager may be saved');
    }
    return !e.entityAspect.entityState.isDetached();
};
var argument4 = 705;
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    return item['rows'];
};
var argument6 = null;
var argument7 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument8 = [59,460];
var argument9 = 403;
var base_0 = [714,157,126,595,893]
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
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,157,126,595,893]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,157,126,595,893]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test836.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)