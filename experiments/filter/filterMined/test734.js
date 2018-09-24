





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return t.data(this, 'ui-droppable').options.scope === n;
};
var argument2 = function (x) {
 callbackArguments.push(arguments) 

    return x !== undefined && x !== null;
};
var argument3 = true;
var argument4 = "";
var argument5 = function (i, atom) {
 callbackArguments.push(arguments) 

    return atom.nodeType === 1;
};
var argument6 = r_0;
var argument7 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
};
var argument8 = true;
var argument9 = true;
var base_0 = ["G&",893,25,893,82,"5Z_","<","O"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["G&",893,25,893,82,"5Z_","<","O"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["G&",893,25,893,82,"5Z_","<","O"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test734.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)