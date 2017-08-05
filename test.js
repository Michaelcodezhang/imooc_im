'use strict'

//原型继承
function test1() {
    function inherits(Child, Parent) {
        var F = function () {
        };
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
    }

    function Student(props) {
        this.name = props.name || '匿名';
    }

    Student.prototype.sayName = function () {
        alert("I am " + this.name);
    };

    function PrimaryStudent(props) {
        Student.call(this, props);
        this.age = props.age;
    }

    inherits(PrimaryStudent, Student);
    PrimaryStudent.prototype.sayAge = function () {
        alert("I am " + this.age);
    };
    var p1 = new PrimaryStudent({
        name: 'Michael',
        age: 10
    });
    p1.sayAge();
    p1.sayName();
}

//class继承
function test2() {
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }

    class Cat extends Animal {
        constructor(name) {
            super(name);
        }

        say() {
            return "Hello, " + this.name + "!";
        }
    }

    var c = new Cat('Kitty');
    c.say();
    alert(c.name);
}
//以上为学习测试，可忽略


$('#b3').click(function () {
    $('p').hide();
});