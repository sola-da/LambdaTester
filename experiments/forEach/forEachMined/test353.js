





var callbackArguments = [];
var argument1 = function (name) {
 callbackArguments.push(arguments) 

    if (_.has(JSHINT.blacklist, name))
        return;
    dest[name] = src[name];
};
var argument2 = null;
var argument3 = function (todo) {
 callbackArguments.push(arguments) 

    if (!todo.done)
        $scope.todos.push(todo);
};
var argument4 = r_1;
var argument5 = null;
var argument6 = function (imp) {
 callbackArguments.push(arguments) 

    var uri = relativeToSelf(imp.uri.content);
    var res = new Resource(uri, parser);
    self.resources.push(res);
};
var argument7 = false;
var argument8 = function (rev) {
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
var argument9 = null;
var base_0 = [242,25,655,627,595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,25,655,627,595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,25,655,627,595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,25,655,627,595]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test353.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)