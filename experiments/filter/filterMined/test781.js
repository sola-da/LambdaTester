





var callbackArguments = [];
var argument1 = function (s) {
 callbackArguments.push(arguments) 

    return s.trim() !== '';
};
var argument2 = null;
var argument3 = -1;
var argument4 = function (gravatarService) {
 callbackArguments.push(arguments) 

    return function (email, size) {
        if (!email) {
            return gravatarService.url('', {
                default: 'mm',
                size: size
            });
        }
        return gravatarService.url(email, {
            default: 'wavatar',
            size: size
        });
    };
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
};
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    return d.values.length;
};
var argument7 = r_0;
var argument8 = true;
var base_0 = ["j`7","E",213,"?BV"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["j`7","E",213,"?BV"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/filter/filterMined/test781.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)