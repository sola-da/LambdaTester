





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d && isValue(d.value);
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
};
var argument3 = function (item) {
 callbackArguments.push(arguments) 

    var caption = item.snippet || item.caption || item.value;
    if (caption === prev)
        return false;
    prev = caption;
    return true;
};
var argument4 = 5.786305917529117e+307;
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    return resp.items.indexOf(item.data) !== -1;
};
var argument6 = {"49":1.2722541710919743e+308,"213":"q","4.4091210475117854e+307":""};
var argument7 = r_2;
var base_0 = [";6c","$^2","6Vh","7","XucO","F","{","C#x","F"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [";6c","$^2","6Vh","7","XucO","F","{","C#x","F"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [";6c","$^2","6Vh","7","XucO","F","{","C#x","F"]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/filter/filterMined/test471.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)