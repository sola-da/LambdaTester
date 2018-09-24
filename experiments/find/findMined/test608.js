





var callbackArguments = [];
var argument1 = function (err, ids) {
 callbackArguments.push(arguments) 

    errLogger(err);
    t.same(ids.sort(), [
        users[0].id,
        users[1].id
    ].sort(), 'The found id did not match the id of the saved object.');
    t.done();
};
var argument2 = null;
var argument3 = false;
var argument4 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc1._id;
};
var argument5 = 157;
var argument6 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc2._id;
};
var argument7 = false;
var argument8 = false;
var argument9 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'There was an error while searching an inexistant unique value.');
    t.same([], ids, 'The return of a search that didn\'t find anything was wrong.');
    t.done();
};
var argument10 = r_0;
var base_0 = ["z","9","pve0","F!","|+,","`","om","G+P","C","m|B^"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z","9","pve0","F!","|+,","`","om","G+P","C","m|B^"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z","9","pve0","F!","|+,","`","om","G+P","C","m|B^"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z","9","pve0","F!","|+,","`","om","G+P","C","m|B^"]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findMined/test608.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)