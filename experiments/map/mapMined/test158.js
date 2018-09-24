





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
var argument3 = true;
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    return x[prop];
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstElementChild) {
        elem = elem.firstElementChild;
    }
    return elem;
};
var argument6 = "d";
var argument7 = null;
var argument8 = function (el) {
 callbackArguments.push(arguments) 

    return el[0];
};
var argument9 = null;
var base_0 = [969,705,126,82,823,714,126,655,969]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,705,126,82,823,714,126,655,969]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,705,126,82,823,714,126,655,969]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test158.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)