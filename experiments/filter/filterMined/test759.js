





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    var matched = filter(ok, function (ok) {
            if (~ok.indexOf('*'))
                return 0 == key.indexOf(ok.split('*')[0]);
            return key == ok;
        });
    return matched.length == 0 && (!global.navigator || 'onerror' !== key);
};
var argument2 = null;
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    if ('endPoint' in d.d3plus && d.d3plus.endPoint === vars.depth.value) {
        d.d3plus.icon = false;
    }
    return true;
};
var argument4 = {"5":"","157":8.742360199115878e+307,"595":5.392270575615071e+307,"783":2.6500049912982496e+307,"c":893,"-1":"(i","4.4701078253548787e+307":"","":"7'","9.083155541941172e+307":403,"1.6894664701351425e+308":213};
var argument5 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
};
var argument6 = null;
var argument7 = r_2;
var argument8 = function (item) {
 callbackArguments.push(arguments) 

    return _.every(rest, function (other) {
        return _.indexOf(other, item) >= 0;
    });
};
var base_0 = [595,49,893,122,460,823,618]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,49,893,122,460,823,618]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,49,893,122,460,823,618]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test759.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)