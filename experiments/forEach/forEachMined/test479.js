





var callbackArguments = [];
var argument1 = function (defaultValue, key) {
 callbackArguments.push(arguments) 

    if (angular.isUndefined(_this.scope[key]) || _this.scope[key] === null) {
        return opts[key] = defaultValue;
    } else {
        return opts[key] = _this.scope[key];
    }
};
var argument2 = true;
var argument3 = function (ln) {
 callbackArguments.push(arguments) 

    var key = getKey(ln);
    if (!filter || !key && filter.indexOf('chat') !== -1) {
        show.push(ln);
    } else if (filter.indexOf(key) >= 0) {
        show.push(ln);
    }
};
var argument4 = null;
var argument5 = function (type) {
 callbackArguments.push(arguments) 

    var axes = this.axesByType[type];
    axes && axes.forEach(this._setCartAxisScaleRange, this);
};
var argument6 = function (np) {
 callbackArguments.push(arguments) 

    if (np.isScalar) {
        mergeRelatedEntityCore(mc, node, np);
    } else {
        mergeRelatedEntitiesCore(mc, node, np);
    }
};
var base_0 = [59,0,82,893,893,705,-1,122,242]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,0,82,893,893,705,-1,122,242]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,0,82,893,893,705,-1,122,242]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,0,82,893,893,705,-1,122,242]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test479.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)