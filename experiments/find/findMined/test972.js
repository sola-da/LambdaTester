





var callbackArguments = [];
var argument1 = function (other_macro) {
 callbackArguments.push(arguments) 

    return other_macro.is_identified_by(signature);
};
var argument2 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.a === 5;
};
var argument3 = ["`^}","(x","L1","M","X|","j$","$","b","soF"];
var argument4 = function (err, user) {
 callbackArguments.push(arguments) 

    if (err)
        err;
    done(err, user);
};
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc2._id;
};
var base_0 = [783,893,157,1.7976931348623157e+308,627]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,893,157,1.7976931348623157e+308,627]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,893,157,1.7976931348623157e+308,627]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,893,157,1.7976931348623157e+308,627]
var r_3= undefined
try {
r_3 = base_3.find(argument5)
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
require("fs").writeFileSync("./experiments/find/findMined/test972.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)