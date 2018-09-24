





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    if (e.entityAspect.entityManager !== em) {
        throw new Error('Only entities in this entityManager may be saved');
    }
    return !e.entityAspect.entityState.isDetached();
};
var argument2 = function (c) {
 callbackArguments.push(arguments) 

    leftToFetch--;
    var ret = utils.filterChange(opts)(c);
    if (ret) {
        results.results.push(c);
        utils.call(opts.onChange, c);
    }
    return ret;
};
var argument3 = "";
var argument4 = function (atom) {
 callbackArguments.push(arguments) 

    return def.hasOwnProp.call(atomsByKey, atom.key);
};
var argument5 = function (n) {
 callbackArguments.push(arguments) 

    return typeof n.x == 'number' && typeof n.y == 'number';
};
var argument6 = [242,627,126,460,5e-324,705];
var argument7 = 595;
var base_0 = ["B",157,618]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["B",157,618]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["B",157,618]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["B",157,618]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test211.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)