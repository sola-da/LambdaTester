





var callbackArguments = [];
var argument1 = function (e, i, a) {
 callbackArguments.push(arguments) 

    return e[key] == value;
};
var argument2 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument3 = null;
var argument4 = [25,82,607,-1,705,627,-1,"ea2|","V6","j"];
var argument5 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    _.isEqual(docs[0], {
        _id: doc2._id,
        a: 2,
        hello: 'earth'
    }).should.equal(true);
    done();
};
var argument6 = null;
var argument7 = true;
var argument8 = function (other_macro) {
 callbackArguments.push(arguments) 

    return other_macro.is_identified_by(signature);
};
var argument9 = [655,"=","g","]"];
var argument10 = "D";
var base_0 = [705,969,"K","8",783]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,969,"K","8",783]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,969,"K","8",783]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,969,"K","8",783]
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
require("fs").writeFileSync("./experiments/find/findMined/test334.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)