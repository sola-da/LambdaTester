





var callbackArguments = [];
var argument1 = function (optKey) {
 callbackArguments.push(arguments) 

    delete subOpts[optKey];
};
var argument2 = null;
var argument3 = function (gPoint) {
 callbackArguments.push(arguments) 

    gPoint.setAttribute('cx', Number(gPoint.getAttribute('cx')) + that.movedRX);
    gPoint.setAttribute('cy', Number(gPoint.getAttribute('cy')) + that.movedRY);
};
var argument4 = null;
var argument5 = function (stuff) {
 callbackArguments.push(arguments) 

    strings.forEach(function (string) {
        model.compareThings(string, stuff).should.equal(-1);
        model.compareThings(stuff, string).should.equal(1);
    });
};
var argument6 = true;
var argument7 = function (w) {
 callbackArguments.push(arguments) 

    if (w && w.el && w.el.parentNode) {
        w._inDocument = false;
        w.el.parentNode.removeChild(w.el);
    }
};
var argument8 = [403,607,627,969,157,1.7976931348623157e+308,655,823,100];
var argument9 = true;
var base_0 = [122,"u`",100,"Lq","Y","r",126,157,"0R"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,"u`",100,"Lq","Y","r",126,157,"0R"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,"u`",100,"Lq","Y","r",126,157,"0R"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,"u`",100,"Lq","Y","r",126,157,"0R"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test642.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)