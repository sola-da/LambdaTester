





var callbackArguments = [];
var argument1 = function (n) {
 callbackArguments.push(arguments) 

    return 0 === n.failed_pings;
};
var argument2 = function (model) {
 callbackArguments.push(arguments) 

    return filters.all(function (filter) {
        return filter.compare(model);
    });
};
var argument3 = [1.7976931348623157e+308,157,705,157,627,126,82,82,627,1.7976931348623157e+308];
var argument4 = null;
var argument5 = function () {
 callbackArguments.push(arguments) 

    var conn = this.getAttributeNS(se_ns, 'connector');
    if (conn == conn_str || conn == alt_str)
        return true;
};
var argument6 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument7 = r_3;
var base_0 = [783,607,403,"h","Z","foV",126,"ZO%","8","v"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,607,403,"h","Z","foV",126,"ZO%","8","v"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,607,403,"h","Z","foV",126,"ZO%","8","v"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test806.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)