





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument2 = null;
var argument3 = {"213":"","403":8.545333508776179e+307,"969":"","5.472338896165464e+307":100,"7.659645406787038e+307":"'j","1.4621984607386898e+308":59,"9.589547189975887e+306":122,"5e-324":"","1.7586015011584991e+308":""};
var argument4 = function () {
 callbackArguments.push(arguments) 

    return $(t) ? n.contains(this, t) : n(this).find(t).size();
};
var argument5 = false;
var argument6 = function (line) {
 callbackArguments.push(arguments) 

    return line.length > 0;
};
var argument7 = function (comment) {
 callbackArguments.push(arguments) 

    return c.test(comment.value);
};
var argument8 = 5.634631479547608e+307;
var base_0 = [843,823,-100,627]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,823,-100,627]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,823,-100,627]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test951.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)