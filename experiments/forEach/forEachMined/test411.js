





var callbackArguments = [];
var argument1 = function (interceptorFactory, index) {
 callbackArguments.push(arguments) 

    var responseFn = isString(interceptorFactory) ? $injector.get(interceptorFactory) : $injector.invoke(interceptorFactory);
    reversedInterceptors.splice(index, 0, {
        response: function (response) {
            return responseFn($q.when(response));
        },
        responseError: function (response) {
            return responseFn($q.reject(response));
        }
    });
};
var argument2 = null;
var argument3 = null;
var argument4 = function (name) {
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
var argument5 = function (value) {
 callbackArguments.push(arguments) 

    BOOLEAN_ELEMENTS[uppercase(value)] = true;
};
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    colors[key] = nop;
};
var argument7 = 823;
var base_0 = ["yR",")","f","tC",";","D^","*"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["yR",")","f","tC",";","D^","*"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["yR",")","f","tC",";","D^","*"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["yR",")","f","tC",";","D^","*"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test411.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)