





var callbackArguments = [];
var argument1 = function (model, val, i) {
 callbackArguments.push(arguments) 

    model[headers[i]] = val;
    return model;
};
var argument2 = null;
var argument3 = {"4":"NG","126":969,"":7.608219195223742e+307,"6.231886838535118e+306":"@"};
var argument4 = function (count, i) {
 callbackArguments.push(arguments) 

    return count + calls[i];
};
var argument5 = 49;
var argument6 = null;
var argument7 = function (sum, suite) {
 callbackArguments.push(arguments) 

    return sum + suite.total();
};
var argument8 = false;
var argument9 = r_0;
var argument10 = function (prev, el) {
 callbackArguments.push(arguments) 

    return make_node(AST_Binary, el[0], {
        operator: '+',
        left: prev,
        right: el[0]
    });
};
var base_0 = [403,783,1.7976931348623157e+308,893,607,5e-324,126,627,843]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,783,1.7976931348623157e+308,893,607,5e-324,126,627,843]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,783,1.7976931348623157e+308,893,607,5e-324,126,627,843]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,783,1.7976931348623157e+308,893,607,5e-324,126,627,843]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test600.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)