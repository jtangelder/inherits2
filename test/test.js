var assert = require("assert");
var inherits = require('../index.js');


it('should inherit', function () {
    function Person() {}
    function Ninja() {
        Person.apply(this, arguments);
    }

    inherits(Ninja, Person);

    var inst = new Ninja();

    assert.equal(true, inst instanceof Ninja);
    assert.equal(true, inst instanceof Person);
    assert.equal(true, Ninja.super_ === Person);
});


it('should extend with new properties', function () {
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
});
