





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    return e.constructor === Object && '@id' in e && e['@id'] === flattened['@id'];
};
var argument2 = null;
var argument3 = true;
var argument4 = function (v) {
 callbackArguments.push(arguments) 

    if (v.unused)
        warning('W098', v.token, v.value);
    if (v.undef)
        isundef(v.funct, 'W117', v.token, v.value);
};
var argument5 = function (s) {
 callbackArguments.push(arguments) 

    return s.trim() !== '';
};
var argument6 = {"":25,"C)gYK86F^x":"h","1.7253119223001852e+308":"","7{PL":5.572587062912953e+307,"1.077874979461432e+308":"*B?","C)":"","92#":607,"]":""};
var argument7 = {"126":"p","":627,"8.181747319203177e+307":"","(U":1.0850275497292546e+308,"s":1.0067536043218685e+306,"6.003058328770045e+307":"u"};
var argument8 = function (elem, pos, self) {
 callbackArguments.push(arguments) 

    return self.indexOf(elem) === pos;
};
var argument9 = null;
var argument10 = false;
var base_0 = [49,126,213,126,460,242]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,126,213,126,460,242]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,126,213,126,460,242]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test952.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)