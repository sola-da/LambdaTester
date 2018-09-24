





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return this.nodeName === name;
};
var argument2 = {"3.3590918844603183e+307":"","":403,"5.451945056109718e+307":157};
var argument3 = true;
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    return _.every(rest, function (other) {
        return _.indexOf(other, item) >= 0;
    });
};
var argument5 = function (elt) {
 callbackArguments.push(arguments) 

    if (elt.value === v && !elt.undef) {
        if (elt.unused === true) {
            elt.unused = false;
        }
        return v;
    }
};
var argument6 = true;
var argument7 = true;
var argument8 = function (user) {
 callbackArguments.push(arguments) 

    return user.p('name') === 'uniquefind';
};
var argument9 = r_2;
var argument10 = true;
var base_0 = [-100,126,460]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,126,460]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,126,460]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,126,460]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test14.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)