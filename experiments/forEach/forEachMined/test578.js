





var callbackArguments = [];
var argument1 = function (annotation) {
 callbackArguments.push(arguments) 

    self.tracer.record([[
            t,
            [annotation]
        ]]);
};
var argument2 = 1.0928754331357602e+308;
var argument3 = function (fn) {
 callbackArguments.push(arguments) 

    fn();
};
var argument4 = null;
var argument5 = function (i) {
 callbackArguments.push(arguments) 

    Mousetrap.unbind([i.toString()], function () {
        return _this.seek(i * 10);
    });
};
var argument6 = null;
var argument7 = function (invFkProp) {
 callbackArguments.push(arguments) 

    if (invFkProp.relatedNavigationProperty.inverse == null) {
        entityManager._updateFkVal(invFkProp, oldValue, newValue);
    }
    ;
};
var argument8 = false;
var argument9 = null;
var base_0 = ["-"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["-"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["-"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["-"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test578.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)