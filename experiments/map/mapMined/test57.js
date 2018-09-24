





var callbackArguments = [];
var argument1 = function (opInA) {
 callbackArguments.push(arguments) 

    if (Op.isInsert(opInA)) {
        return new InsertOp(opInA.value, opInA.composeAttributes(opInB.attributes));
    } else {
        return new RetainOp(opInA.start, opInA.end, opInA.composeAttributes(opInB.attributes));
    }
};
var argument2 = {"460":6.919932464016283e+307,"783":"","":6.116966833055024e+307,"XZ":"","1.688877847563681e+308":9.474061555027644e+307,"1.237589637788156e+308":"","?y|":126,"(":969};
var argument3 = false;
var argument4 = function (t) {
 callbackArguments.push(arguments) 

    return {
        tid: t.tid,
        price: t.px,
        date: t.unixtime,
        amount: t.qty
    };
};
var argument5 = function (zone) {
 callbackArguments.push(arguments) 

    return _.extend(zone.$, { name: zone._ });
};
var argument6 = r_1;
var argument7 = function (r) {
 callbackArguments.push(arguments) 

    return [
        r.id,
        r.ip,
        r.name,
        r.bannedby,
        r.reason
    ];
};
var base_0 = [-100,969,893,100,0,627]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,969,893,100,0,627]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,969,893,100,0,627]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test57.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)