





var callbackArguments = [];
var argument1 = function (contact) {
 callbackArguments.push(arguments) 

    if (contact.$disposition === 'update') {
        delete contact.$disposition;
        contactsStore.put(contact);
    } else if (contact.$disposition === 'remove') {
        contactsStore.delete(contact.uri);
    } else {
        self.error(new Error('unrecognized disposition: \'' + contact.$disposition + '\'').stack);
    }
};
var argument2 = function (klass, i) {
 callbackArguments.push(arguments) 

    activeClassName += (i > 0 ? ' ' : '') + klass + '-active';
};
var argument3 = {"0":"","6":"$","595":"","7.830455573726529e+307":"","f":1.7976931348623157e+308,"g%":"","0+z":"","Xjb":122,"":-1};
var argument4 = null;
var argument5 = function (currentContainer) {
 callbackArguments.push(arguments) 

    var containerResult = ContainerResult.parse(currentContainer);
    responseObject.listContainersResult.push(containerResult);
};
var argument6 = function (data) {
 callbackArguments.push(arguments) 

    $.fn[data.name] = function () {
        var elems = [];
        this.each(function () {
            var shadowData = elementData(this, 'shadowData');
            var elem = shadowData && shadowData[data.prop] || this;
            if ($.inArray(elem, elems) == -1) {
                elems.push(elem);
            }
        });
        return this.pushStack(elems);
    };
};
var base_0 = ["z]7","IjdqRe",49,"M",49,714,59,"-{"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z]7","IjdqRe",49,"M",49,714,59,"-{"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z]7","IjdqRe",49,"M",49,714,59,"-{"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z]7","IjdqRe",49,"M",49,714,59,"-{"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test78.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)