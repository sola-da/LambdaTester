





var callbackArguments = [];
var argument1 = function (s) {
 callbackArguments.push(arguments) 

    map[s.name.toLowerCase()] = s;
    map[s.operator.toLowerCase()] = s;
    if (s.aliases) {
        s.aliases.forEach(function (alias) {
            map[alias.toLowerCase()] = s;
        });
    }
};
var argument2 = "kT";
var argument3 = function (n) {
 callbackArguments.push(arguments) 

    if (dojo.hasClass(n, 'dojoxGridExpandoRow')) {
        var en = dojo.query('.dojoxGridExpando', n)[0];
        if (en) {
            var ew = dijit.byNode(en);
            var toggleClass = ew ? ew.toggleClass : en.getAttribute('toggleClass');
            var wOpen = ew ? ew.open : self.expandoCell.getOpenState(en.getAttribute('itemId'));
            self._toggleRows(toggleClass, wOpen && open);
        }
    }
    n.style.display = open ? '' : 'none';
};
var argument4 = r_1;
var argument5 = function (t) {
 callbackArguments.push(arguments) 

    if (t.id === d.id || barIndices[t.id] !== barIndices[d.id]) {
        return;
    }
    if (targetIds.indexOf(t.id) < targetIds.indexOf(d.id) && t.values[i].value * d.value > 0) {
        offset += scale(t.values[i].value) - y0;
    }
};
var argument6 = true;
var argument7 = function (value, key) {
 callbackArguments.push(arguments) 

    missingObj[key] = value;
};
var base_0 = [25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test889.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)