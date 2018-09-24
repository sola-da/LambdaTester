





var callbackArguments = [];
var argument1 = function (p) {
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
var argument2 = null;
var argument3 = true;
var argument4 = function (e) {
 callbackArguments.push(arguments) 

    return e.constructor === Object && '@id' in e && e['@id'] === flattened['@id'];
};
var argument5 = 100;
var argument6 = null;
var argument7 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
};
var argument8 = r_0;
var argument9 = [49,213,49,100,82,714,595,823,823];
var argument10 = function (x) {
 callbackArguments.push(arguments) 

    return x !== self;
};
var argument11 = false;
var argument12 = false;
var base_0 = [-1,213,0,705,126,893,242,126,100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,213,0,705,126,893,242,126,100]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test783.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)