





var callbackArguments = [];
var argument1 = function (element) {
 callbackArguments.push(arguments) 

    _remove(element.target, gesture.defaultEvent);
    array.forEach(gesture.subEvents, function (type) {
        _remove(element.target, gesture.defaultEvent + '.' + type);
    }, this);
};
var argument2 = false;
var argument3 = function (rev) {
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
var argument4 = null;
var argument5 = {};
var argument6 = function (name) {
 callbackArguments.push(arguments) 

    var markerName = 'marker' + name.charAt(0).toUpperCase() + name.substr(1), b = markerName in mixin;
    if (name in mixin) {
        lang.setObject('series.' + name, mixin[name], t);
        if (!b) {
            lang.setObject('marker.' + name, mixin[name], t);
        }
    }
    if (b) {
        lang.setObject('marker.' + name, mixin[markerName], t);
    }
};
var argument7 = null;
var argument8 = "WZ";
var argument9 = function (child) {
 callbackArguments.push(arguments) 

    child.destroyRecursive();
};
var argument10 = false;
var argument11 = r_3;
var base_0 = [627,403,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,403,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,403,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,403,49]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test243.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)