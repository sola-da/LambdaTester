





var callbackArguments = [];
var argument1 = function (np) {
 callbackArguments.push(arguments) 

    tryResolveNp(np, metadataStore);
};
var argument2 = function (schedule) {
 callbackArguments.push(arguments) 

    console.log(schedule + ',' + scheduledCounts[schedule]);
};
var argument3 = function (ref) {
 callbackArguments.push(arguments) 

    if (ref instanceof AST_Continue) {
        ref = ref.label.start;
        croak('Continue label `' + label.name + '` refers to non-IterationStatement.', ref.line, ref.col, ref.pos);
    }
};
var argument4 = r_2;
var argument5 = function (sep) {
 callbackArguments.push(arguments) 

    var parts = scoped.split(sep);
    scoped = parts.map(function (p) {
        var t = p.trim();
        if (t && splits.indexOf(t) < 0 && t.indexOf(attrName) < 0) {
            p = t.replace(/([^:]*)(:*)(.*)/, '$1' + attrName + '$2$3');
        }
        return p;
    }).join(sep);
};
var argument6 = "";
var base_0 = [618,82,59,627,714,59,100,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,82,59,627,714,59,100,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,82,59,627,714,59,100,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,82,59,627,714,59,100,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test28.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)