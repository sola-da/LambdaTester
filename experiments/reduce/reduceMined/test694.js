





var callbackArguments = [];
var argument1 = function (length, op) {
 callbackArguments.push(arguments) 

    return length + op.getLength();
};
var argument2 = function (model, val, i) {
 callbackArguments.push(arguments) 

    model[headers[i]] = val;
    return model;
};
var argument3 = "";
var argument4 = null;
var argument5 = function (a, def) {
 callbackArguments.push(arguments) 

    if (def.value) {
        var name = make_node(AST_SymbolRef, def.name, def.name);
        a.push(make_node(AST_Assign, def, {
            operator: '=',
            left: name,
            right: def.value
        }));
    }
    return a;
};
var argument6 = false;
var argument7 = r_0;
var argument8 = function (newargs, fn, cb) {
 callbackArguments.push(arguments) 

    fn.apply(that, newargs.concat([function () {
            var err = arguments[0];
            var nextargs = Array.prototype.slice.call(arguments, 1);
            cb(err, nextargs);
        }]));
};
var base_0 = [893,607,59,655,618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,607,59,655,618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,607,59,655,618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,607,59,655,618]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test694.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)