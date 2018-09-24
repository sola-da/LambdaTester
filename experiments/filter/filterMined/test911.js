





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return $(t) ? n.contains(this, t) : n(this).find(t).size();
};
var argument2 = null;
var argument3 = true;
var argument4 = function (model) {
 callbackArguments.push(arguments) 

    if (model.matchesQuery) {
        return model.matchesQuery(query);
    } else {
        return this.model.prototype.attrsMatchQuery(model, this.model.prototype.queryAttrs, query);
    }
};
var argument5 = function (c) {
 callbackArguments.push(arguments) 

    var source = c[vars.edges.source][vars.id.value], target = c[vars.edges.target][vars.id.value];
    return claimed.indexOf(source) < 0 && target == primaryId || claimed.indexOf(target) < 0 && source == primaryId;
};
var argument6 = r_1;
var argument7 = function (n) {
 callbackArguments.push(arguments) 

    return 0 === n.failed_pings;
};
var base_0 = [59,655,607,655,59,627,893,-100,460]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,655,607,655,59,627,893,-100,460]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,655,607,655,59,627,893,-100,460]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,655,607,655,59,627,893,-100,460]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test911.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)