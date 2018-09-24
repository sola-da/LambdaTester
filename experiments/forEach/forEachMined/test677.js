





var callbackArguments = [];
var argument1 = function (meth) {
 callbackArguments.push(arguments) 

    self[meth] = self[meth].bind(self);
};
var argument2 = null;
var argument3 = function (name) {
 callbackArguments.push(arguments) 

    var method = map[name];
    defineProperty(object, name, method, false);
};
var argument4 = false;
var argument5 = function (name) {
 callbackArguments.push(arguments) 

    var desc = webshims.defineNodeNameProperty(name, 'checkValidity', {
            prop: {
                value: function () {
                    isCheckValidity = true;
                    var ret = desc.prop._supvalue.apply(this, arguments);
                    isCheckValidity = false;
                    return ret;
                }
            }
        });
};
var argument6 = function (answerP) {
 callbackArguments.push(arguments) 

    Q(answerP).then(deferred.resolve, deferred.reject);
};
var argument7 = r_0;
var argument8 = "KP";
var base_0 = [783,969,783,126,655,100,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,969,783,126,655,100,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,969,783,126,655,100,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,969,783,126,655,100,618]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test677.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)