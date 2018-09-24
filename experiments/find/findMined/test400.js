





var callbackArguments = [];
var argument1 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(2);
    _.pluck(docs, 'somedata').should.not.contain('ok');
    return cb();
};
var argument2 = null;
var argument3 = [969,59,213,783,893,823,843,705];
var argument4 = function (other_macro) {
 callbackArguments.push(arguments) 

    return other_macro.is_identified_by(signature);
};
var argument5 = "";
var argument6 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.deepEqual(doc1, _.find(docs, function (d) {
        return d._id === doc1._id;
    }));
    assert.deepEqual(doc2, _.find(docs, function (d) {
        return d._id === doc2._id;
    }));
    done();
};
var argument7 = "";
var argument8 = [122,714,100];
var argument9 = function onFound(err, docs) {
 callbackArguments.push(arguments) 

    console.log('PROJECTS.JS::LIBRARY SERVED WITH', docs.length, 'ASSETS');
    if (err)
        throw err;
    callback(err, docs);
};
var argument10 = 823;
var base_0 = [126,5e-324,969,607,213,460]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,5e-324,969,607,213,460]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,5e-324,969,607,213,460]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,5e-324,969,607,213,460]
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
require("fs").writeFileSync("./experiments/find/findMined/test400.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)