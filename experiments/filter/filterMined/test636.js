





var callbackArguments = [];
var argument1 = function (b) {
 callbackArguments.push(arguments) 

    return block_ids.includes(b.blockID);
};
var argument2 = false;
var argument3 = function () {
 callbackArguments.push(arguments) 

    var i = 0;
    for (; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument4 = null;
var argument5 = function (i) {
 callbackArguments.push(arguments) 

    return !f(i);
};
var argument6 = [126,1.7976931348623157e+308,705,242,-100];
var argument7 = function (choice) {
 callbackArguments.push(arguments) 

    return choice.indexOf(query) != -1;
};
var argument8 = {"":1.636300746978551e+308,"1.7976931348623157e+308":714,"1.2105379463527023e+308":7.995026250490616e+307,";G":6.957034319404633e+307};
var base_0 = ["1&","<","Gq","V","x","LdqM","JO<m:","izv","LI"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["1&","<","Gq","V","x","LdqM","JO<m:","izv","LI"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["1&","<","Gq","V","x","LdqM","JO<m:","izv","LI"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["1&","<","Gq","V","x","LdqM","JO<m:","izv","LI"]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test636.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)