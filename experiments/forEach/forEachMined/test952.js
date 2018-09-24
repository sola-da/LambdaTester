





var callbackArguments = [];
var argument1 = function (pageRange) {
 callbackArguments.push(arguments) 

    var range = {
            start: parseInt(pageRange.Start, 10),
            end: parseInt(pageRange.End, 10)
        };
    responseObject.pageRegions.push(range);
};
var argument2 = null;
var argument3 = true;
var argument4 = function (calcSpec) {
 callbackArguments.push(arguments) 

    complexType.addCalculation(calcSpec);
};
var argument5 = function (child) {
 callbackArguments.push(arguments) 

    if (child.index != undefined) {
        delete child.index;
        if (child.field == undefined) {
            child.field = '';
        }
    }
};
var argument6 = {"":25,"C)gYK86F^x":"h","1.7253119223001852e+308":"","7{PL":5.572587062912953e+307,"1.077874979461432e+308":"*B?","C)":"","92#":607,"]":""};
var argument7 = {"126":"p","":627,"8.181747319203177e+307":"","(U":1.0850275497292546e+308,"s":1.0067536043218685e+306,"6.003058328770045e+307":"u"};
var argument8 = function (prop) {
 callbackArguments.push(arguments) 

    webshims.defineNodeNamesProperty(nodeNames, prop, {
        prop: {
            set: function (val) {
                $.attr(this, prop, val);
            },
            get: function () {
                return $.attr(this, prop) || '';
            }
        }
    });
};
var argument9 = null;
var argument10 = false;
var base_0 = [49,126,213,126,460,242]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,126,213,126,460,242]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,126,213,126,460,242]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,126,213,126,460,242]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test952.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)