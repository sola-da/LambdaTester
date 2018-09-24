





var callbackArguments = [];
var argument1 = function (st) {
 callbackArguments.push(arguments) 

    st._addPropertyCore(new DataProperty(newProp));
};
var argument2 = null;
var argument3 = function (y, i) {
 callbackArguments.push(arguments) 

    if (i != 0) {
        var prev = vars.data.time.values[0];
        vars.data.time.dataSteps.push(getDiff(prev, y, periods.indexOf(vars.data.time.stepType)));
    } else {
        vars.data.time.dataSteps = [0];
    }
};
var argument4 = null;
var argument5 = function (obj, i) {
 callbackArguments.push(arguments) 

    normalized_filtered_orig.push(obj.orig);
};
var argument6 = null;
var argument7 = function (name, fn) {
 callbackArguments.push(arguments) 

    Kimbo.fn[name] = function (selector) {
        var ret;
        if (!this.length) {
            return this;
        }
        ret = Kimbo.map(this, fn);
        ret = this.length > 1 && !IS_UNIQUE[name] ? _unique(ret) : ret;
        if (Kimbo.isString(selector)) {
            ret = _.kimbo(ret).filter(selector);
        }
        return _.kimbo(ret);
    };
};
var argument8 = null;
var argument9 = [0,-1,100,157,714,59,783,460,59,403];
var base_0 = [403,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,403]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test229.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)