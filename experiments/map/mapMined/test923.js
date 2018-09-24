





var callbackArguments = [];
var argument1 = function (chunk) {
 callbackArguments.push(arguments) 

    var stub = new Stub(function (err, out) {
            if (err) {
                chunk.setError(err);
            } else {
                callback(out, chunk);
            }
        });
    body(stub.head, context).end();
};
var argument2 = null;
var argument3 = function (s) {
 callbackArguments.push(arguments) 

    return s.replace('\\.', '.');
};
var argument4 = null;
var argument5 = "";
var argument6 = function (obj1) {
 callbackArguments.push(arguments) 

    return _.find(array2, function (obj2) {
        if (comparison != null) {
            return comparison(obj1, obj2);
        } else {
            return _.isEqual(obj1, obj2);
        }
    });
};
var argument7 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument8 = {"82":1.3929025873833756e+308,"t{#":"","22K;=a39pH":"","1.2548611195235955e+308":4.356116927687329e+307,"zD":126,"8.03964311198917e+306":893,"":"","Pu^lR(@":157};
var argument9 = r_1;
var base_0 = [714,213,157]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,213,157]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,213,157]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,213,157]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test923.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)