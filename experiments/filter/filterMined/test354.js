





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return function (input, length) {
        if (!input)
            return '';
        if (!angular.isString(input))
            input = input.toString();
        length = length || 10;
        return input.length > length ? input.substr(0, length) + '...' : input;
    };
};
var argument3 = function (n) {
 callbackArguments.push(arguments) 

    return typeof n.x == 'number' && typeof n.y == 'number';
};
var argument4 = false;
var argument5 = null;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return !jQuery('a', this).length;
};
var argument7 = null;
var argument8 = {"0":"","100":843,"969":1.5598328933500357e+308,"":"","_":"Gzn","4.615583623461995e+307":"","1.6473741186856707e+308":100,"{J@":59,"1.1756260384542968e+308":-100};
var base_0 = [607,618,213,823,705]
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
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test354.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)