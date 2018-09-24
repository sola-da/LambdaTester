





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
};
var argument2 = null;
var argument3 = false;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size();
};
var argument5 = null;
var argument6 = function (c) {
 callbackArguments.push(arguments) 

    return c;
};
var argument7 = [25,82,783,595,-100,595,122,0,25,100];
var argument8 = {"0":"","59":"","242":1.5578072586887977e+308,"705":"","":"q","1.311163076234906e+308":"","1.1501150183513307e+307":""};
var argument9 = function (p) {
 callbackArguments.push(arguments) 

    var i;
    if (p[0].elements[0].combinator.value === ' ') {
        p[0].elements[0].combinator = new tree.Combinator('');
    }
    for (i = 0; i < p.length; i++) {
        if (p[i].getIsReferenced() && p[i].getIsOutput()) {
            return true;
        }
    }
    return false;
};
var argument10 = null;
var base_0 = [595,893,-100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,893,-100]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test454.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)