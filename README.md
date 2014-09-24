inherits2
=========

[util.inherits](http://nodejs.org/api/util.html#util_util_inherits_constructor_superconstructor)
with an extra argument to add properties. Depends on [inherits](http://npmjs.org/package/inherits).

````js
var inherits = require('inherits2');


function Person() {}
Person.prototype.getType = function() {
    return 'person';
};

Person.prototype.getName = function() {
    return 'joe';
};

function Ninja() {
    Person.apply(this, arguments);
}

inherits(Ninja, Person, {
    getType: function() {
        return 'ninja';
    }
});

var ninja = new Ninja();

assert.equal('joe', ninja.getName());
assert.equal('ninja', ninja.getType());
assert.equal('person', Ninja.super_.prototype.getType.call(ninja));
````
