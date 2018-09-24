





var callbackArguments = [];
var argument1 = function (row) {
 callbackArguments.push(arguments) 

    var val = row.value;
    var docId = val && typeof val === 'object' && val._id || row.id;
    return view.sourceDB.get(docId).then(function (joinedDoc) {
        row.doc = joinedDoc;
    }, function () {
    });
};
var argument2 = true;
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    return d[xKey];
};
var argument4 = function (t) {
 callbackArguments.push(arguments) 

    return t.values.map(function (v) {
        return v.x;
    });
};
var argument5 = function (et) {
 callbackArguments.push(arguments) 

    if (et instanceof EntityType) {
        return groupMap[et.name];
    } else {
        throw new Error('The EntityManager.getChanges() \'entityTypes\' parameter must be either an entityType or an array of entityTypes or null');
    }
};
var argument6 = null;
var argument7 = true;
var base_0 = [-1,705,783,213,607]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,705,783,213,607]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,705,783,213,607]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,705,783,213,607]
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
require("fs").writeFileSync("./experiments/map/mapMined/test170.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)