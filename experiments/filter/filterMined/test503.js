





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    return !_.contains(rest, value);
};
var argument2 = function (item) {
 callbackArguments.push(arguments) 

    return resp.items.indexOf(item.data) !== -1;
};
var argument3 = true;
var argument4 = function (k) {
 callbackArguments.push(arguments) 

    return now[k] !== old[k];
};
var argument5 = null;
var argument6 = function (e) {
 callbackArguments.push(arguments) 

    if (e.entityAspect.entityManager !== em) {
        throw new Error('Only entities in this entityManager may be saved');
    }
    return !e.entityAspect.entityState.isDetached();
};
var base_0 = [122,607,-100,893,893,82,705,1.7976931348623157e+308,705,157]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,607,-100,893,893,82,705,1.7976931348623157e+308,705,157]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,607,-100,893,893,82,705,1.7976931348623157e+308,705,157]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,607,-100,893,893,82,705,1.7976931348623157e+308,705,157]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test503.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)