





var callbackArguments = [];
var argument1 = function (path) {
 callbackArguments.push(arguments) 

    if (!fs.existsSync(path)) {
        if (!options.quiet)
            cli.fail('No such include directory: ' + path);
        return pbjs.STATUS_ERR_INCLUDE_DIR;
    }
};
var argument2 = true;
var argument3 = function (expression, key) {
 callbackArguments.push(arguments) 

    whensExpFns[key] = $interpolate(expression.replace(BRACE, startSymbol + numberExp + '-' + offset + endSymbol));
};
var argument4 = {"59":460,"460":"Ys","823":"J$o6","893":"T2","":"","1.3814779480608363e+308":4.176186536135523e+307,"j1":1.276088902711043e+308};
var argument5 = "m";
var argument6 = function (todo) {
 callbackArguments.push(arguments) 

    if (!todo.done)
        $scope.todos.push(todo);
};
var argument7 = function (docInfo) {
 callbackArguments.push(arguments) 

    if (docInfo._id && utils.isLocalId(docInfo._id)) {
        return checkDone();
    }
    var id = docInfo.metadata.id;
    tx.executeSql('SELECT json FROM ' + DOC_STORE + ' WHERE id = ?', [id], function (tx, result) {
        if (result.rows.length) {
            var metadata = JSON.parse(result.rows.item(0).json);
            fetchedDocs.set(id, metadata);
        }
        checkDone();
    });
};
var argument8 = r_2;
var base_0 = [-1,893,25,714,969,100,-1,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,893,25,714,969,100,-1,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,893,25,714,969,100,-1,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,893,25,714,969,100,-1,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test831.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)