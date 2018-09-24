





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
var argument2 = "{";
var argument3 = true;
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === id3;
};
var argument5 = false;
var argument6 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    done();
};
var argument7 = {"1.7522599687829822e+308":"4"};
var argument8 = [618,0,893,843,607,595];
var argument9 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '2';
};
var base_0 = ["K-b>","n"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["K-b>","n"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["K-b>","n"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["K-b>","n"]
var r_3= undefined
try {
r_3 = base_3.find(argument9)
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
require("fs").writeFileSync("./experiments/find/findMined/test474.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)