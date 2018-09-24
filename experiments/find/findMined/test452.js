





var callbackArguments = [];
var argument1 = function (item, idx) {
 callbackArguments.push(arguments) 

    return idx === 0;
};
var argument2 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same([
        1,
        7,
        6,
        5,
        4
    ], ids, 'Searching when min>max condition(ZREVRANGEBYSCORE) is invalid.');
    t.done();
};
var argument3 = true;
var argument4 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '1';
};
var argument5 = function (r) {
 callbackArguments.push(arguments) 

    return r.line == line;
};
var argument6 = true;
var base_0 = [607,242,1.7976931348623157e+308,122,893,82,1.7976931348623157e+308,5e-324]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,242,1.7976931348623157e+308,122,893,82,1.7976931348623157e+308,5e-324]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,242,1.7976931348623157e+308,122,893,82,1.7976931348623157e+308,5e-324]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,242,1.7976931348623157e+308,122,893,82,1.7976931348623157e+308,5e-324]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6)
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
require("fs").writeFileSync("./experiments/find/findMined/test452.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)