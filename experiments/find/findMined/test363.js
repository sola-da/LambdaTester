





var callbackArguments = [];
var argument1 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.same(ids.length, 1, 'Did not find the correct number of ids for non-incremental id model.');
    t.same(ids[0], self.userIds[1], 'Did not find the correct id for non-incremental id model.');
    t.done();
};
var argument2 = null;
var argument3 = null;
var argument4 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs[0].a.should.equal('something');
    done();
};
var argument5 = "C>8,FZfO";
var argument6 = false;
var argument7 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc2._id;
};
var argument8 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === doc2._id;
};
var argument9 = r_1;
var base_0 = [460,969,607,595,49,595]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,969,607,595,49,595]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,969,607,595,49,595]
var r_2= undefined
try {
r_2 = base_2.find(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,969,607,595,49,595]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findMined/test363.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)