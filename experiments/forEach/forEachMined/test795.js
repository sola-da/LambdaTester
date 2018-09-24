





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    _counter[id]++;
    this.globals[id].activate();
};
var argument2 = [607,460,"mF",0,82,5e-324,655,607,"El$a"];
var argument3 = null;
var argument4 = function (text) {
 callbackArguments.push(arguments) 

    bayes.train(text, 'spam');
};
var argument5 = function (stmt) {
 callbackArguments.push(arguments) 

    output.indent();
    stmt.print(output);
    output.newline();
};
var argument6 = function (docInfo) {
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
var argument7 = 1.6035141405577716e+307;
var argument8 = ["LNd8g>l","G","v","y][","U","q","q","g?"];
var base_0 = ["r:S","9","Y","8","=","q"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["r:S","9","Y","8","=","q"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["r:S","9","Y","8","=","q"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["r:S","9","Y","8","=","q"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test795.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)