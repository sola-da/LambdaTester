





var callbackArguments = [];
var argument1 = function (items) {
 callbackArguments.push(arguments) 

    items = items.filter(function (item) {
        return item['cols'];
    });
    if (items.length) {
        var sortedGroup = items.sort(compare('level', 'desc')), lastLevel = sortedGroup[0].level;
        if (level < lastLevel) {
            level = lastLevel;
        }
    }
};
var argument2 = true;
var argument3 = function (contact) {
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
var argument4 = true;
var argument5 = function (message, i) {
 callbackArguments.push(arguments) 

    if (message.rollup) {
        output += filename + ': ' + capitaliz"Error".message) + ' - ' + messag"Error" + '\n';
    } else {
        output += filename + ': ' + 'line ' + message.line + ', col ' + message.col + ', ' + capitaliz"Error".message) + ' - ' + messag"Error" + '\n';
    }
};
var argument6 = ["D","5","6J","Rh","`","}&","mX$","f","k3"];
var argument7 = null;
var argument8 = function (value, key) {
 callbackArguments.push(arguments) 

    dst[key] = value;
};
var argument9 = r_3;
var base_0 = [460,82,157,460,403,25,893,595,126]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,82,157,460,403,25,893,595,126]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,82,157,460,403,25,893,595,126]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,82,157,460,403,25,893,595,126]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test846.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)