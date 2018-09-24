





var callbackArguments = [];
var argument1 = function (value, index, list) {
 callbackArguments.push(arguments) 

    if (predicate(value, index, list))
        results.push(value);
};
var argument2 = function (rev) {
 callbackArguments.push(arguments) 

    var index = txn.objectStore(BY_SEQ_STORE).index('_doc_id_rev');
    var key = docId + '::' + rev;
    index.getKey(key).onsuccess = function (e) {
        var seq = e.target.result;
        if (!seq) {
            return;
        }
        txn.objectStore(BY_SEQ_STORE)['delete'](seq);
        count--;
        if (!count) {
            txn.objectStore(DOC_STORE).put(metadata);
        }
    };
};
var argument3 = function (value) {
 callbackArguments.push(arguments) 

    result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args);
};
var argument4 = function (aTelVariant) {
 callbackArguments.push(arguments) 

    assert.equal(index.byTel[aTelVariant], MockFbFriendData.uid);
};
var base_0 = ["&","N","+"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&","N","+"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["&","N","+"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["&","N","+"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test238.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)