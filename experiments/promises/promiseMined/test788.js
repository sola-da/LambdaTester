/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function _thenBypass() {
 callbackArguments.push(arguments) 

    this.bypass(nb);
};
var argument2 = {"49":1.6078226733891816e+308,"607":"","893":"d","5.920614408259042e+307":"","1.7832159851993802e+308":"","h":"sS","":627,"l":1.5183041294501341e+308};
var argument3 = function (e) {
 callbackArguments.push(arguments) 

    should.exist(e, 'error when you have a conflict');
    done();
};
var argument4 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument5 = r_3;
var argument6 = function (dataContent) {
 callbackArguments.push(arguments) 

    assert.include(dataContent, 'codeMirrorValue2', 'Publish did not include editor Form ID');
    assert.include(dataContent, '<node2>value2</node2>', 'Publish did not include created content');
};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument2,argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument4)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument5,argument6)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test788.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)