





var callbackArguments = [];
var argument1 = function (edge) {
 callbackArguments.push(arguments) 

    if (height[edge.from] === undefined) {
        height[edge.from] = 1 + height[edge.to];
    } else {
        height[edge.from] = Math.min(height[edge.from], 1 + height[edge.to]);
    }
};
var argument2 = true;
var argument3 = [82,"uth]"];
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    countryById[d.id] = d.name;
};
var argument5 = [403,969,-1,783,655,49];
var argument6 = [969,157,126,49,460,893,460,"-","2",-100];
var argument7 = function (type) {
 callbackArguments.push(arguments) 

    var typeAxes = this.axesByType[type];
    typeAxes && def.query(typeAxes).reverse().each(function (axis) {
        this._createAxisPanel(axis);
    }, this);
};
var argument8 = ["=+",")",595,618,607,783,823,242,"a&L,D","H"];
var argument9 = r_2;
var argument10 = function (axis) {
 callbackArguments.push(arguments) 

    var axisKey = vars[axis].value;
    if (requirements.indexOf(axis) >= 0 && axisKey && vars[axis].scale.value === 'continuous') {
        exceptions.push(axisKey);
        nestedData.key(function (d) {
            return fetchValue(vars, d, axisKey);
        });
    }
};
var argument11 = 627;
var base_0 = ["{Nc:","o","h","Z0q;L5","*e"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["{Nc:","o","h","Z0q;L5","*e"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["{Nc:","o","h","Z0q;L5","*e"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["{Nc:","o","h","Z0q;L5","*e"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test388.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)