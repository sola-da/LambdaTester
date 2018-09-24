





var callbackArguments = [];
var argument1 = function (level, i) {
 callbackArguments.push(arguments) 

    nestedData.key(function (d) {
        if (typeof level === 'function') {
            return level(d);
        }
        return fetchValue(vars, d, level);
    });
    checkAxes();
};
var argument2 = function (fullViewName) {
 callbackArguments.push(arguments) 

    var parts = parseViewName(fullViewName);
    var designDocName = '_design/' + parts[0];
    var viewName = parts[1];
    docsToViews[designDocName] = docsToViews[designDocName] || {};
    docsToViews[designDocName][viewName] = true;
};
var argument3 = r_1;
var argument4 = function (items) {
 callbackArguments.push(arguments) 

    items = items.filter(function (item) {
        return item['rows'];
    });
    if (items.length) {
        var sortedGroup = items.sort(compare('level', 'desc')), lastLevel = sortedGroup[0].level;
        if (level < lastLevel) {
            level = lastLevel;
        }
    }
};
var argument5 = r_0;
var argument6 = true;
var argument7 = function (mapping) {
 callbackArguments.push(arguments) 

    mapping.extra = true;
    $scope.groupConfig.push(mapping);
};
var argument8 = false;
var base_0 = [25,59,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,59,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,59,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,59,403]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test885.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)