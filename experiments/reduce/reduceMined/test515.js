





var callbackArguments = [];
var argument1 = function (memo, key) {
 callbackArguments.push(arguments) 

    if (_.isUndefined(memo)) {
        return self.rel(key);
    } else if (_.isArray(memo)) {
        return _.flatten(_.map(memo, function (item) {
            return item.rel(key);
        }));
    } else if (memo) {
        return memo.rel(key);
    } else {
        return null;
    }
};
var argument2 = 59;
var argument3 = function (acc, parent) {
 callbackArguments.push(arguments) 

    return util.mergeObjects(acc, parent.queryParams);
};
var argument4 = null;
var argument5 = false;
var argument6 = function (hash, r) {
 callbackArguments.push(arguments) 

    if (r instanceof Rule && r.variable === true) {
        hash[r.name] = r;
    }
    if (r.message === 'Import' && r.root && r.root.variables) {
        var vars = r.root.variables();
        for (var name in vars) {
            if (vars.hasOwnProperty(name)) {
                hash[name] = vars[name];
            }
        }
    }
    return hash;
};
var argument7 = false;
var argument8 = function (previousValue, currentValue) {
 callbackArguments.push(arguments) 

    return previousValue + currentValue;
};
var argument9 = r_1;
var base_0 = [460,823,122,893,-100,242,705,82,242,460]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,823,122,893,-100,242,705,82,242,460]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,823,122,893,-100,242,705,82,242,460]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,823,122,893,-100,242,705,82,242,460]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test515.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)