





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument2 = function (item) {
 callbackArguments.push(arguments) 

    return extend({}, item, { isActive: item.id === itemId });
};
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return U(this);
};
var argument5 = 5.846115625543157e+307;
var argument6 = function (fkName) {
 callbackArguments.push(arguments) 

    return entity.getProperty(fkName);
};
var argument7 = {"714":1.5397575731158556e+308,"843":"","893":1.7976931348623157e+308,"":595,"t":7.074809975712086e+307,"^]^":1.1610261190529179e+308,"Q{":8.993646788714374e+307};
var argument8 = {"9":1.5273455346198765e+308,"1.5734174244186152e+308":242,"y":"","":"","-":"cc","8Fx":59};
var base_0 = [126,893,618,843,705,100]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,893,618,843,705,100]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,893,618,843,705,100]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,893,618,843,705,100]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test149.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)