





var callbackArguments = [];
var argument1 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'There was an error while searching an inexistant unique value.');
    t.same([], ids, 'The return of a search that didn\'t find anything was wrong.');
    t.done();
};
var argument2 = null;
var argument3 = true;
var argument4 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '1';
};
var argument5 = function (other_macro) {
 callbackArguments.push(arguments) 

    return other_macro.is_identified_by(signature);
};
var argument6 = "a";
var argument7 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc3._id;
};
var argument8 = true;
var argument9 = "";
var base_0 = [969,82,460,460,242]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,82,460,460,242]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,82,460,460,242]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,82,460,460,242]
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
require("fs").writeFileSync("./experiments/find/findMined/test534.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)