





var callbackArguments = [];
var argument1 = function (i) {
 callbackArguments.push(arguments) 

    Mousetrap.unbind([i.toString()], function () {
        return _this.seek(i * 10);
    });
};
var argument2 = false;
var argument3 = null;
var argument4 = function (path) {
 callbackArguments.push(arguments) 

    assert.ok(~[
        'hello',
        'goodbye'
    ].indexOf(path));
};
var argument5 = function (field, current) {
 callbackArguments.push(arguments) 

    current = o[field];
    if (current != null) {
        this[field] = current.reify ? current.reify() : current;
    } else if (current === null) {
        this[field] = null;
    }
};
var argument6 = function (info, index) {
 callbackArguments.push(arguments) 

    if (!this._userUsedIndexes[index]) {
        var indexes = 1 === info.message ? freeMeaIndexes : freeDisIndexes;
        indexes && indexes.push(index);
    }
};
var base_0 = [126,655,618,25,"qe","q",714]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,655,618,25,"qe","q",714]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,655,618,25,"qe","q",714]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,655,618,25,"qe","q",714]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test798.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)