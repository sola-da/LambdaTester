





var callbackArguments = [];
var argument1 = function (r) {
 callbackArguments.push(arguments) 

    return r.line == line;
};
var argument2 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument3 = true;
var argument4 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same(ids, [
        6,
        7,
        1
    ], 'The found ids were incorrect.');
    t.done();
};
var argument5 = "c";
var argument6 = 1.360504603159235e+308;
var argument7 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc1._id;
};
var base_0 = ["fW","^g$",100,893,823,213,"#V","NUXx"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["fW","^g$",100,893,823,213,"#V","NUXx"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["fW","^g$",100,893,823,213,"#V","NUXx"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["fW","^g$",100,893,823,213,"#V","NUXx"]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findMined/test10.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)