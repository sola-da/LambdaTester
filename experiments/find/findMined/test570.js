





var callbackArguments = [];
var argument1 = function (err, mappings) {
 callbackArguments.push(arguments) 

    debug('Role mappings found: %s %j', err, mappings);
    if (err) {
        if (done)
            done(err);
        return;
    }
    mappings.forEach(function (m) {
        addRole(m.roleId);
    });
    if (done)
        done();
};
var argument2 = true;
var argument3 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    _.isEqual(docs[0], {
        _id: doc2._id,
        a: 2,
        hello: 'earth'
    }).should.equal(true);
    done();
};
var argument4 = r_0;
var argument5 = "`";
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === id2;
};
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return d.somedata === 'another';
};
var argument8 = true;
var argument9 = {"783":2.287192392495372e+307,"4.273591666054041e+307":1.4456434069271093e+308,"1H=im":"^#&t","":1.2582811767154877e+307,"E":"","1.9790907935240508e+307":"6","1.26850174334409e+308":7.667346353135682e+307,"9.065568984505817e+307":2.482908916231815e+307};
var base_0 = [893,627]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,627]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,627]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,627]
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
require("fs").writeFileSync("./experiments/find/findMined/test570.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)