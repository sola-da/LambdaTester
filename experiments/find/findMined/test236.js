





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc4._id;
};
var argument2 = false;
var argument3 = true;
var argument4 = function (b) {
 callbackArguments.push(arguments) 

    return b.blockID === blockID;
};
var argument5 = r_0;
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    return d.somedata === 'again';
};
var argument7 = r_0;
var argument8 = "IV";
var argument9 = function (err, docs) {
 callbackArguments.push(arguments) 

    var d1 = _.find(docs, function (doc) {
            return doc._id === doc1._id;
        }), d2 = _.find(docs, function (doc) {
            return doc._id === doc2._id;
        }), d3 = _.find(docs, function (doc) {
            return doc._id === doc3._id;
        });
    d1.a.should.equal(1);
    d2.a.should.equal(12);
    d3.a.should.equal(5);
    done();
};
var argument10 = r_1;
var argument11 = null;
var base_0 = [705,655,969]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,655,969]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,655,969]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,655,969]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findMined/test236.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)