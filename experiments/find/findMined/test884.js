





var callbackArguments = [];
var argument1 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.prototype.name === name;
};
var argument2 = {"843":"","AvV":1.1922796025987186e+308,"1.471500690587278e+308":893,"1.4384969624433935e+308":893,"1.9498792984886692e+307":3.1235007037217994e+307,"k(@":"","M;yDU=":"","q":1.646262538089801e+308};
var argument3 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs[0].hello = 'changed';
    d.findOne({ a: 2 }, function (err, doc) {
        doc.hello.should.equal('world');
        done();
    });
};
var argument4 = false;
var argument5 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument6 = "!g4";
var argument7 = function (err, ids) {
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
var argument8 = r_0;
var argument9 = true;
var base_0 = ["]W","_","5","5","g"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["]W","_","5","5","g"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]W","_","5","5","g"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["]W","_","5","5","g"]
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
require("fs").writeFileSync("./experiments/find/findMined/test884.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)