





var callbackArguments = [];
var argument1 = function (err, docs) {
 callbackArguments.push(arguments) 

    done('Find should not be executed since autoload failed');
};
var argument2 = r_0;
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    return d.name == fileName;
};
var argument4 = null;
var argument5 = 783;
var argument6 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    Object.keys(docs[0]).length.should.equal(2);
    docs[0]._id.should.equal(id1);
    docs[0].somedata.should.equal('ok');
    return cb();
};
var argument7 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc2._id;
};
var base_0 = [49,"A","_Hrf",1.7976931348623157e+308,"%",655,"d",";?","e"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,"A","_Hrf",1.7976931348623157e+308,"%",655,"d",";?","e"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,"A","_Hrf",1.7976931348623157e+308,"%",655,"d",";?","e"]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,"A","_Hrf",1.7976931348623157e+308,"%",655,"d",";?","e"]
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
require("fs").writeFileSync("./experiments/find/findMined/test42.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)