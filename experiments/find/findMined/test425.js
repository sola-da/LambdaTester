





var callbackArguments = [];
var argument1 = function (err, mappings) {
 callbackArguments.push(arguments) 

    if (err) {
        if (callback)
            callback(err);
        return;
    }
    return mappings.map(function (m) {
        return m.principalId;
    });
};
var argument2 = "";
var argument3 = null;
var argument4 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.a === 42;
};
var argument5 = null;
var argument6 = 0;
var argument7 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc3._id;
};
var argument8 = 126;
var argument9 = false;
var argument10 = function (err, results) {
 callbackArguments.push(arguments) 

    expect(results).to.exist;
    expect(results.length).to.equal[0];
    done();
};
var base_0 = [59,618,0,705,0,893,823,655,59]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,618,0,705,0,893,823,655,59]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,618,0,705,0,893,823,655,59]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,618,0,705,0,893,823,655,59]
var r_3= undefined
try {
r_3 = base_3.find(argument10)
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
require("fs").writeFileSync("./experiments/find/findMined/test425.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)