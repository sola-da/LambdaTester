





var callbackArguments = [];
var argument1 = function (err, results) {
 callbackArguments.push(arguments) 

    expect(results).to.exist;
    expect(results.length).to.equal[0];
    done();
};
var argument2 = function (c) {
 callbackArguments.push(arguments) 

    return c.schema.indexOf(catalog) >= 0;
};
var argument3 = [714,25,"_",618,"Lq4#Ns",843,655,705];
var argument4 = function (err, apiKeys) {
 callbackArguments.push(arguments) 

    assert(!err);
    assert(apiKeys.length === 1);
    assert(apiKeys[0].owner === fixtures.models.user.id);
    done();
};
var argument5 = false;
var argument6 = 5.451460343499782e+307;
var argument7 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc3._id;
};
var base_0 = [627,460,49,59,82,-1,823,82,783]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,460,49,59,82,-1,823,82,783]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,460,49,59,82,-1,823,82,783]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,460,49,59,82,-1,823,82,783]
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
require("fs").writeFileSync("./experiments/find/findMined/test457.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)