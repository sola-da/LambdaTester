





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d.somedata === 'another';
};
var argument2 = true;
var argument3 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '2';
};
var argument4 = true;
var argument5 = ["Nd!(","$#1","B_","Jq","*:V"];
var argument6 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '1';
};
var argument7 = null;
var argument8 = function (err, docs) {
 callbackArguments.push(arguments) 

    done('Find should not be executed since autoload failed');
};
var argument9 = r_3;
var argument10 = r_3;
var base_0 = [627,460,122,25,5e-324,627,-1]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,460,122,25,5e-324,627,-1]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,460,122,25,5e-324,627,-1]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,460,122,25,5e-324,627,-1]
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
require("fs").writeFileSync("./experiments/find/findMined/test204.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)