





var callbackArguments = [];
var argument1 = function (rev) {
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
var argument2 = null;
var argument3 = false;
var argument4 = function (majorTick) {
 callbackArguments.push(arguments) 

    new pvc.visual.CartesianAxisTickScene(rootScene, {
        tick: majorTick,
        tickRaw: majorTick,
        tickLabel: axis.scale.tickFormat(majorTick)
    });
};
var argument5 = function (b) {
 callbackArguments.push(arguments) 

    elems.push(addBanRow(b, first));
};
var argument6 = true;
var argument7 = {"1.7976931348623157e+308":242};
var argument8 = function (message, i) {
 callbackArguments.push(arguments) 

    if (message.rollup) {
        output.push('<issue severity="' + messag"Error" + '" reason="' + escapeSpecialCharacters(messag"Error") + '" evidence="' + escapeSpecialCharacters(message.evidence) + '"/>');
    } else {
        output.push('<issue line="' + message.line + '" char="' + message.col + '" severity="' + messag"Error" + '"' + ' reason="' + escapeSpecialCharacters(messag"Error") + '" evidence="' + escapeSpecialCharacters(message.evidence) + '"/>');
    }
};
var base_0 = [595,627,595,-100,627]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,627,595,-100,627]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,627,595,-100,627]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,627,595,-100,627]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test821.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)