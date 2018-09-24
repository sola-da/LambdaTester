





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
};
var argument2 = function (file) {
 callbackArguments.push(arguments) 

    return path.join(__dirname, file) !== __filename && file !== 'pages.js';
};
var argument3 = function (match) {
 callbackArguments.push(arguments) 

    return !!suggestions[match.text];
};
var argument4 = r_1;
var argument5 = function (handler) {
 callbackArguments.push(arguments) 

    return handler && (!event || handler.event === event) && (!fn || handler.fn === fn) && (!selector || handler.selector === selector);
};
var argument6 = 1.7145121292777048e+308;
var argument7 = r_3;
var base_0 = [893,969,969,705,1.7976931348623157e+308,893,157,783,59,122]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,969,969,705,1.7976931348623157e+308,893,157,783,59,122]
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
r_2 = base_2.filter(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,969,969,705,1.7976931348623157e+308,893,157,783,59,122]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test375.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)