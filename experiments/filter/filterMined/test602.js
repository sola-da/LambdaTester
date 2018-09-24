





var callbackArguments = [];
var argument1 = function (patch) {
 callbackArguments.push(arguments) 

    var parsedPath = parsePath(patch.path);
    if ([
            'add',
            'remove'
        ].indexOf(patch.op) != -1 && !isNaN(parsedPath.col)) {
        if (newOrRemovedColumns.indexOf(parsedPath.col) != -1) {
            return false;
        } else {
            newOrRemovedColumns.push(parsedPath.col);
        }
    }
    return true;
};
var argument2 = [25,783,1.7976931348623157e+308,82];
var argument3 = {"59":"=N","157":"n","1.107538355615099e+308":9.573067578488204e+307,"":"","&":"_",",":"GI(p","+":""};
var argument4 = function () {
 callbackArguments.push(arguments) 

    return function (items) {
        var filteredItems = [];
        for (var i = 0; i < items.length; i++) {
            if (!items[i].completed) {
                filteredItems.push(items[i]);
            }
        }
        return filteredItems;
    };
};
var argument5 = r_0;
var argument6 = false;
var argument7 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
};
var argument8 = r_1;
var argument9 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
};
var base_0 = ["_oEvRS",">","U","_","dQt!","3:i"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_oEvRS",">","U","_","dQt!","3:i"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["_oEvRS",">","U","_","dQt!","3:i"]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test602.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)