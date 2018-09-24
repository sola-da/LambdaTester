





var callbackArguments = [];
var argument1 = function (err, ids) {
 callbackArguments.push(arguments) 

    if (err) {
        console.dir(err);
    }
    t.same(ids, [userUnique.id], 'The found id did not match the id of the saved object.');
    t.done();
};
var argument2 = {"714":"","843":"","969":"","zg":"6i!|","1.3595757737181653e+308":"3","$":"y","":122,"1.1547181404281835e+308":157};
var argument3 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument4 = true;
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    return d.name == dimension;
};
var argument6 = "lRfb";
var argument7 = function (query) {
 callbackArguments.push(arguments) 

    return _.isEqual(query.args, args);
};
var base_0 = [100,618,1.7976931348623157e+308,100,100,0,157]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,618,1.7976931348623157e+308,100,100,0,157]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,618,1.7976931348623157e+308,100,100,0,157]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,618,1.7976931348623157e+308,100,100,0,157]
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
require("fs").writeFileSync("./experiments/find/findMined/test908.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)