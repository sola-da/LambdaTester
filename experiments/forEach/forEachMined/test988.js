





var callbackArguments = [];
var argument1 = function (ext) {
 callbackArguments.push(arguments) 

    app.get('*.' + ext, function (req, res, next) {
        res.sendfile(req.url.path);
    });
};
var argument2 = null;
var argument3 = function (n) {
 callbackArguments.push(arguments) 

    var en = dojo.query('.dojoxGridExpando', n)[0];
    if (en && en.parentNode && en.parentNode.parentNode && !dojo.hasClass(en.parentNode.parentNode, 'dojoxGridNoChildren')) {
        var ew = dijit.byNode(en);
        if (ew) {
            ew._toggleRows(toggleClass, ew.open && open);
        }
    }
    n.style.display = open ? '' : 'none';
};
var argument4 = function (name) {
 callbackArguments.push(arguments) 

    s.push(name + ': ' + pvc.stringify(this.atoms[name].value));
};
var argument5 = null;
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    dojo[i++ % 2 === 0 ? 'addClass' : 'removeClass'](item, 'sortListItemOdd');
    this.containerNode.appendChild(item);
};
var argument7 = r_2;
var base_0 = [607,5e-324,"+I","-","a",655,969,"]"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,5e-324,"+I","-","a",655,969,"]"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,5e-324,"+I","-","a",655,969,"]"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,5e-324,"+I","-","a",655,969,"]"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test988.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)