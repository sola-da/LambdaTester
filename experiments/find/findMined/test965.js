





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === newDoc1._id;
};
var argument2 = "+";
var argument3 = null;
var argument4 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same([
        7,
        6,
        5,
        4
    ], ids, 'Defining an endpoint failed.');
    UserFindMockup.find({
        number: {
            min: 3,
            max: 1,
            endpoints: ')'
        }
    }, function (err, ids) {
        t.ok(!err, 'Unexpected redis error in custom query');
        t.same([1], ids, 'Defining an endpoint failed.');
        t.done();
    });
};
var argument5 = ["f>","U"];
var argument6 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc3._id;
};
var argument7 = r_0;
var argument8 = function (d) {
 callbackArguments.push(arguments) 

    return d.name == fileName;
};
var argument9 = r_0;
var base_0 = [126,49]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,49]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,49]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,49]
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
require("fs").writeFileSync("./experiments/find/findMined/test965.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)