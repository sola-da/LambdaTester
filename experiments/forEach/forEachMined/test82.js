





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    __data_xs[id] = xs[id];
};
var argument2 = null;
var argument3 = null;
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
var argument5 = {"100":1.0187261457436787e+308,"403":5.714486227571787e+307,"+":403,"r":1.6450802397680713e+308,"w":9.749840516947277e+307};
var argument6 = function (trait) {
 callbackArguments.push(arguments) 

    forEach(getOwnPropertyNames(trait), function (name) {
        var pd = trait[name];
        if (hasOwnProperty(newTrait, name) && !newTrait[name].required) {
            if (pd.required) {
                return;
            }
            if (!isSameDesc(newTrait[name], pd)) {
                newTrait[name] = makeConflictingPropDesc(name);
            }
        } else {
            newTrait[name] = pd;
        }
    });
};
var argument7 = ["IrY","%","-b7b"];
var argument8 = function (info, index) {
 callbackArguments.push(arguments) 

    if (!this._userUsedIndexes[index]) {
        var indexes = 1 === info.message ? freeMeaIndexes : freeDisIndexes;
        indexes && indexes.push(index);
    }
};
var argument9 = null;
var argument10 = true;
var base_0 = [655,969,100,"E","Rg","e","P","|x","N",893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,969,100,"E","Rg","e","P","|x","N",893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,969,100,"E","Rg","e","P","|x","N",893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,969,100,"E","Rg","e","P","|x","N",893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test82.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)