





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument2 = null;
var argument3 = null;
var argument4 = function (field) {
 callbackArguments.push(arguments) 

    return _.indexOf(self.state.get('hiddenFields'), field.id) == -1;
};
var argument5 = r_1;
var argument6 = function (choice) {
 callbackArguments.push(arguments) 

    if (filteringCaseSensitive) {
        return choice.indexOf(query) != -1;
    } else {
        return choice.toLowerCase().indexOf(lowerCaseQuery) != -1;
    }
};
var argument7 = null;
var argument8 = function (ref) {
 callbackArguments.push(arguments) 

    return ref.identifier.name === variable.name;
};
var argument9 = null;
var base_0 = [242,460,126,100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,460,126,100]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,460,126,100]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,460,126,100]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test520.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)