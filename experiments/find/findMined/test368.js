





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc3._id;
};
var argument2 = r_0;
var argument3 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same(ids, [
        3,
        8
    ], 'The found ids were incorrect.');
    t.done();
};
var argument4 = 4.0532458920928435e+306;
var argument5 = null;
var argument6 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc4._id;
};
var base_0 = ["AT",122,"l+]a+",5e-324,"5R)6R"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["AT",122,"l+]a+",5e-324,"5R)6R"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["AT",122,"l+]a+",5e-324,"5R)6R"]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["AT",122,"l+]a+",5e-324,"5R)6R"]
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
require("fs").writeFileSync("./experiments/find/findMined/test368.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)