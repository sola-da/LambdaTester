





var callbackArguments = [];
var argument1 = function (fn) {
 callbackArguments.push(arguments) 

    if (!fn.only || (fn.only = 'prop' && type == 'prop') || fn.only == 'attr' && type != 'prop') {
        fn.call(elem, value, boolValue, isVal ? 'val' : curType, type);
    }
};
var argument2 = [">P8lMW","+`6","Po","q","0",":"];
var argument3 = function (value, index, list) {
 callbackArguments.push(arguments) 

    results.push(iterator.call(context, value, index, list));
};
var argument4 = null;
var argument5 = function (rev) {
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
var argument6 = function (t) {
 callbackArguments.push(arguments) 

    format_key(t, '');
};
var argument7 = null;
var argument8 = {};
var base_0 = [627,655]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,655]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,655]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,655]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test301.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)