





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc3._id;
};
var argument2 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc3._id;
};
var argument3 = null;
var argument4 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === newDoc2._id;
};
var argument5 = true;
var argument6 = "!";
var argument7 = function (err, docs) {
 callbackArguments.push(arguments) 

    var datafileContents = model.deserialize(fs.readFileSync(testDb, 'utf8'));
    assert.deepEqual(datafileContents, {
        $$indexCreated: {
            fieldName: 'a',
            unique: true
        }
    });
    docs.length.should.equal(0);
    done();
};
var argument8 = r_2;
var argument9 = true;
var base_0 = ["[","Q,","L","_in","4d%V,","!-)","O U>o|s","0","@t"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[","Q,","L","_in","4d%V,","!-)","O U>o|s","0","@t"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[","Q,","L","_in","4d%V,","!-)","O U>o|s","0","@t"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[","Q,","L","_in","4d%V,","!-)","O U>o|s","0","@t"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findMined/test537.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)