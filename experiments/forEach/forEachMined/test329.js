





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
var argument2 = {"0":823,"100":8.83117205151904e+307,"":"","1.6623621464588222e+307":3.464724830300996e+307,"1.544811371883101e+307":25};
var argument3 = function (item) {
 callbackArguments.push(arguments) 

    appObj[property](item, value[item]);
};
var argument4 = [843,"A",783,-100];
var argument5 = 3.036363967882133e+307;
var argument6 = function (def, i) {
 callbackArguments.push(arguments) 

    if (i)
        output.comma();
    def.print(output);
};
var argument7 = function (stmt, i) {
 callbackArguments.push(arguments) 

    if (i)
        output.newline();
    output.indent(true);
    stmt.print(output);
};
var argument8 = true;
var argument9 = r_1;
var base_0 = ["a","1"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["a","1"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["a","1"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["a","1"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test329.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)