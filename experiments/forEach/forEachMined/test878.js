





var callbackArguments = [];
var argument1 = function (method) {
 callbackArguments.push(arguments) 

    SVG.Set.prototype[method] = function () {
        for (var i = 0, il = this.members.length; i < il; i++)
            if (this.members[i] && typeof this.members[i][method] == 'function')
                this.members[i][method].apply(this.members[i], arguments);
        return method == 'animate' ? this.fx || (this.fx = new SVG.SetFX(this)) : this;
    };
};
var argument2 = {"893":"OzM","F":"","7P":"","5e-324":"{"};
var argument3 = true;
var argument4 = function (prop) {
 callbackArguments.push(arguments) 

    data[prop] = bundle[iso + '_' + prop];
};
var argument5 = true;
var argument6 = false;
var argument7 = function (nodeName) {
 callbackArguments.push(arguments) 

    retDesc[nodeName] = webshims[baseMethod](nodeName, a, b, c);
};
var argument8 = "zRIei";
var argument9 = r_0;
var argument10 = function (desc) {
 callbackArguments.push(arguments) 

    var bundle = dojo.i18n.getLocalization(desc.pkg, desc.name, locale);
    gregorian = dojo.mixin(gregorian, bundle);
};
var argument11 = true;
var argument12 = r_3;
var base_0 = ["(x","+D:"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(x","+D:"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(x","+D:"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(x","+D:"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test878.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)