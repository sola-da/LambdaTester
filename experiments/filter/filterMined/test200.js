





var callbackArguments = [];
var argument1 = function (user) {
 callbackArguments.push(arguments) 

    return user.p('name') === 'uniquefind';
};
var argument2 = null;
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument5 = null;
var argument6 = 5.025484007053388e+307;
var argument7 = function (x) {
 callbackArguments.push(arguments) 

    return !x.next;
};
var argument8 = function (d) {
 callbackArguments.push(arguments) 

    var d = new Date(fetchValue(vars, d, vars.time.value).toString());
    d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000);
    return d.getTime() === ms;
};
var argument9 = true;
var argument10 = {"1.1160483267937641e+308":"","5kRy":627,"rQ":"Y","":"T|","w":607};
var base_0 = [1.7976931348623157e+308,122,59,705,82]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,122,59,705,82]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,122,59,705,82]
var r_2= undefined
try {
r_2 = base_2.filter(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,122,59,705,82]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test200.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)