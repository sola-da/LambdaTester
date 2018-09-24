





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    if (tmp.indexOf(item.id) === -1) {
        tmp.push(item.id);
        return item;
    }
};
var argument2 = null;
var argument3 = ["B&",893,"o",82,"]N#:","p",627];
var argument4 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
};
var argument5 = 607;
var argument6 = false;
var argument7 = function (e) {
 callbackArguments.push(arguments) 

    e.entityAspect.isBeingSaved = true;
    return e.entityAspect.entityState.isModified() && e.entityType.concurrencyProperties.length > 0;
};
var argument8 = function (d) {
 callbackArguments.push(arguments) 

    var d = new Date(fetchValue(vars, d, vars.time.value).toString());
    d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000);
    return d.getTime() === ms;
};
var argument9 = {"":5.491558326533119e+307};
var argument10 = null;
var base_0 = [595,122,82,893,618,783]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,122,82,893,618,783]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,122,82,893,618,783]
var r_2= undefined
try {
r_2 = base_2.filter(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test755.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)