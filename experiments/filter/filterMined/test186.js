





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d3.select(this).node().classList[1] !== liClass;
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return $(this).contents().eq(0).text() === opt.peoplePickerDisplayName;
};
var argument3 = null;
var argument4 = [627,25,460,460,618,82,126,893,25];
var argument5 = function (id) {
 callbackArguments.push(arguments) 

    return this.globals[id].activate && get.globals.indexOf(id) === -1;
};
var argument6 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < self.length; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument7 = null;
var argument8 = ["p","OWLx",100,59,843,"(",";",-1,"l5",49];
var base_0 = [783,460,242]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,460,242]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,460,242]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,460,242]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test186.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)