





var callbackArguments = [];
var argument1 = function (gMarker) {
 callbackArguments.push(arguments) 

    if (!gMarker.isDrawn) {
        if (gMarker.doAdd) {
            gMarker.setMap(_this.gMap);
            return gMarker.isDrawn = true;
        } else {
            return deletes.push(gMarker);
        }
    }
};
var argument2 = function (field) {
 callbackArguments.push(arguments) 

    field.setChecked(values.indexOf(field.getValue()) !== -1);
};
var argument3 = null;
var argument4 = "O";
var argument5 = function (defaultValue, key) {
 callbackArguments.push(arguments) 

    if (angular.isUndefined(_this.scope[key]) || _this.scope[key] === null) {
        return opts[key] = defaultValue;
    } else {
        return opts[key] = _this.scope[key];
    }
};
var argument6 = null;
var argument7 = false;
var argument8 = function (astralLetter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('^\\P{L}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\P{Letter}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\PL$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\p{^L}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\p{^Letter}$').test(astralLetter)).toBe(false);
};
var argument9 = 893;
var argument10 = null;
var base_0 = ["[#","+",969,607,"}"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[#","+",969,607,"}"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[#","+",969,607,"}"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[#","+",969,607,"}"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test450.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)