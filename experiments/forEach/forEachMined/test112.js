





var callbackArguments = [];
var argument1 = function (event) {
 callbackArguments.push(arguments) 

    event.pause();
};
var argument2 = false;
var argument3 = function (x, callback) {
 callbackArguments.push(arguments) 

    iterator(x, function (v) {
        if (v) {
            main_callback(true);
            main_callback = function () {
            };
        }
        callback();
    });
};
var argument4 = function (doclets) {
 callbackArguments.push(arguments) 

    var validationResult;
    validationResult = validate(doclets.doclets, schema.DOCLETS_SCHEMA);
    if (validationResult.errors.length) {
        expect(doclets.filename).toBe('');
        expect(validationResult.errors).toEqual([]);
    } else {
        expect(validationResult.errors.length).toBe(0);
    }
};
var argument5 = function (pair) {
 callbackArguments.push(arguments) 

    fun(pair[0], pair[1]);
};
var argument6 = r_3;
var base_0 = ["M",1.7976931348623157e+308,"m2","W",0,"ZH",242]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["M",1.7976931348623157e+308,"m2","W",0,"ZH",242]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["M",1.7976931348623157e+308,"m2","W",0,"ZH",242]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["M",1.7976931348623157e+308,"m2","W",0,"ZH",242]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test112.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)