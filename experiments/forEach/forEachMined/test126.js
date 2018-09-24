





var callbackArguments = [];
var argument1 = function (cancelFn) {
 callbackArguments.push(arguments) 

    (cancelFn || noop)(true);
};
var argument2 = function (np) {
 callbackArguments.push(arguments) 

    if (np.isScalar) {
        mergeRelatedEntity(mc, np, targetEntity, node);
    } else {
        mergeRelatedEntities(mc, np, targetEntity, node);
    }
};
var argument3 = function (alias) {
 callbackArguments.push(arguments) 

    map[alias.toLowerCase()] = s;
};
var argument4 = null;
var argument5 = r_1;
var argument6 = function (rev) {
 callbackArguments.push(arguments) 

    var sql = 'DELETE FROM ' + BY_SEQ_STORE + ' WHERE doc_id=? AND rev=?';
    tx.executeSql(sql, [
        docId,
        rev
    ], function (tx) {
        if (++numDone === revs.length) {
            var sql = 'UPDATE ' + DOC_STORE + ' SET json = ? WHERE id = ?';
            tx.executeSql(sql, [
                JSON.stringify(metadata),
                docId
            ], function () {
                callback();
            });
        }
    });
};
var base_0 = [627,1.7976931348623157e+308,49,242,705]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,1.7976931348623157e+308,49,242,705]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,1.7976931348623157e+308,49,242,705]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,1.7976931348623157e+308,49,242,705]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test126.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)