





var callbackArguments = [];
var argument1 = function (item, idx) {
 callbackArguments.push(arguments) 

    return idx === 0;
};
var argument2 = null;
var argument3 = function (err, ids) {
 callbackArguments.push(arguments) 

    if (err) {
        console.dir(err);
    }
    t.same(ids, [
        users[0].id,
        users[1].id
    ], 'The found id did not match the id of the saved object.');
    t.done();
};
var argument4 = "9";
var argument5 = null;
var argument6 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'There was an error while finding.');
    t.same([test.id], ids, 'Did not find the correct ids');
    t.done();
};
var argument7 = null;
var argument8 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    done();
};
var argument9 = true;
var argument10 = 9.692723397746089e+306;
var base_0 = ["3","<","]_^","N",")","M,Zg","pB`","x9^","9j","("]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["3","<","]_^","N",")","M,Zg","pB`","x9^","9j","("]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["3","<","]_^","N",")","M,Zg","pB`","x9^","9j","("]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["3","<","]_^","N",")","M,Zg","pB`","x9^","9j","("]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findMined/test682.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)