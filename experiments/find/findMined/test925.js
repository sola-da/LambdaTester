





var callbackArguments = [];
var argument1 = function (err, results) {
 callbackArguments.push(arguments) 

    expect(results).to.exist;
    expect(results.length).to.equal[0];
    done();
};
var argument2 = null;
var argument3 = 157;
var argument4 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument5 = r_1;
var argument6 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.a === 5;
};
var argument7 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '1';
};
var base_0 = [-1,893,969,843,-100,100,893,783,607]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,893,969,843,-100,100,893,783,607]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,893,969,843,-100,100,893,783,607]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,893,969,843,-100,100,893,783,607]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findMined/test925.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)