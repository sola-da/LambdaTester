





var callbackArguments = [];
var argument1 = function (sum2, datum) {
 callbackArguments.push(arguments) 

    var value = datum.atoms[dimName].value;
    isAbs && 0 > value && (value = -value);
    return null != sum2 ? sum2 + value : value;
};
var argument2 = null;
var argument3 = function (m, item) {
 callbackArguments.push(arguments) 

    var itemName = item.path.split('/').slice(-1)[0] + (item.is_dir ? '/' : '');
    if (item.is_dir) {
        m[itemName] = revCache.get(path + itemName);
    } else {
        m[itemName] = item.rev;
    }
    return m;
};
var argument4 = 7.897401937546955e+306;
var argument5 = r_1;
var argument6 = function (count, p) {
 callbackArguments.push(arguments) 

    if (!p.name || p.name && !p.value) {
        return count + 1;
    } else {
        return count;
    }
};
var argument7 = null;
var argument8 = function (declarations, declaration) {
 callbackArguments.push(arguments) 

    declarations.push(declaration);
    if (declaration == background.declaration) {
        declaration.value = declaration.value.replace(urlPattern, 'url(' + sprite.data + ')');
    }
    return declarations;
};
var argument9 = 823;
var base_0 = [403,618,49,893,403,100,705,157,213,25]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,618,49,893,403,100,705,157,213,25]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,618,49,893,403,100,705,157,213,25]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,618,49,893,403,100,705,157,213,25]
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test259.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)