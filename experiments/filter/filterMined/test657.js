





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return _.every(rest, function (other) {
        return _.indexOf(other, item) >= 0;
    });
};
var argument2 = null;
var argument3 = null;
var argument4 = function (e) {
 callbackArguments.push(arguments) 

    if (e.entityAspect.entityManager !== em) {
        throw new Error('Only entities in this entityManager may be saved');
    }
    return !e.entityAspect.entityState.isDetached();
};
var argument5 = function (k) {
 callbackArguments.push(arguments) 

    return now[k] !== old[k];
};
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    return item['level'] === groupLevel;
};
var base_0 = [618,25,893,607,783,213,969,-100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,25,893,607,783,213,969,-100]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,25,893,607,783,213,969,-100]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,25,893,607,783,213,969,-100]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test657.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)