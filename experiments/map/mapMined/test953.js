





var callbackArguments = [];
var argument1 = function (leaf) {
 callbackArguments.push(arguments) 

    return leaf.rev;
};
var argument2 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument3 = function (et) {
 callbackArguments.push(arguments) 

    if (et instanceof EntityType) {
        return groupMap[et.name];
    } else {
        throw new Error('The EntityManager.getChanges() \'entityTypes\' parameter must be either an entityType or an array of entityTypes or null');
    }
};
var argument4 = {"0":714,"59":25,"1.0367667467396255e+308":"9G","`'j":""};
var argument5 = function (comp) {
 callbackArguments.push(arguments) 

    return pvc_PercentValue.parse(comp);
};
var argument6 = "";
var argument7 = 1.0581614542902696e+308;
var base_0 = ["DdK#yt-","r","O>",893]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["DdK#yt-","r","O>",893]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["DdK#yt-","r","O>",893]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test953.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)