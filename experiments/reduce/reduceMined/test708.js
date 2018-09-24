





var callbackArguments = [];
var argument1 = function (prev, cur) {
 callbackArguments.push(arguments) 

    numLinesEst++;
    if (cur.indexOf('\n') >= 0)
        numLinesEst++;
    return prev + cur.length + 1;
};
var argument2 = 1.6659446165977058e+307;
var argument3 = false;
var argument4 = function (acc, key) {
 callbackArguments.push(arguments) 

    if (/^_/.test(key) && key !== '_attachments') {
        acc.metadata[key.slice(1)] = doc[key];
    } else {
        acc.data[key] = doc[key];
    }
    return acc;
};
var argument5 = {"5.151110242844842e+307":"","8.22334750365332e+307":823};
var argument6 = function (err, results) {
 callbackArguments.push(arguments) 

    callback.apply(that, [err].concat(results));
};
var argument7 = 8.274696976512959e+307;
var argument8 = true;
var argument9 = function (memo, key) {
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
var base_0 = [627,213,714,705,843]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,213,714,705,843]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,213,714,705,843]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,213,714,705,843]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test708.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)