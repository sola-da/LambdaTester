





var callbackArguments = [];
var argument1 = function (listener) {
 callbackArguments.push(arguments) 

    try {
        listener();
    } catch (e) {
        FBTrace.sysout('SelectionController.selectionChanged; EXCEPTION ' + e, e);
        FBTestApp.FBTest.exception('SelectionController', e);
    }
};
var argument2 = function (doclets) {
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
var argument3 = "";
var argument4 = function (cookie) {
 callbackArguments.push(arguments) 

    _this.write(cookie, null, 0);
};
var argument5 = true;
var argument6 = function (c, i) {
 callbackArguments.push(arguments) 

    dataString = c.join(',');
    csv_data += i < csv_to_return.length ? dataString + '\n' : dataString;
};
var base_0 = ["Qa","@","-"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Qa","@","-"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Qa","@","-"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Qa","@","-"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test926.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)