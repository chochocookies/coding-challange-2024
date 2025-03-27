// Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

// var a = new Vector([1, 2, 3]);
// var b = new Vector([3, 4, 5]);
// var c = new Vector([5, 6, 7, 8]);

// a.add(b);      // should return a new Vector([4, 6, 8])
// a.subtract(b); // should return a new Vector([-2, -2, -2])
// a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
// a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
// a.add(c);      // throws an error
// If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

// Also provide:

// a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)')
// an equals method, to check that two vectors that have the same components are equal
// Note: the test cases will utilize the user-provided equals method.

function Vector(components) { this.array = components; };
Vector.prototype.operation = function(a, f) {
  if (this.array.length != a.array.length) throw 'Mismatched length';
  return new Vector(a.array.map((v,i) => f(this.array[i], v)));
}
Vector.prototype.add      = function(a) { return this.operation(a,(x,y) => x+y); }
Vector.prototype.subtract = function(a) { return this.operation(a,(x,y) => x-y); }
Vector.prototype.dot      = function(a) { return this.operation(a,(x,y) => x*y).array.reduce((s,v) => s+v, 0); }
Vector.prototype.equals   = function(a) { return a.array.every((v,i) => v == this.array[i]); }
Vector.prototype.norm     = function( ) { return Math.sqrt(this.array.reduce((s,v) => s + v*v, 0)); }
Vector.prototype.toString = function( ) { return '(' + this.array.join(',') + ')'; }

function Vector(components) {
    // Ensure components is an array
    if (!Array.isArray(components)) {
        throw new Error("Components must be an array.");
    }
    this.components = components;
}

Vector.prototype.add = function(other) {
    // Check if the other vector has the same length
    if (this.components.length !== other.components.length) {
        throw new Error("Vectors must be of the same length.");
    }
    const result = this.components.map((value, index) => value + other.components[index]);
    return new Vector(result);
};

Vector.prototype.subtract = function(other) {
    // Check if the other vector has the same length
    if (this.components.length !== other.components.length) {
        throw new Error("Vectors must be of the same length.");
    }
    const result = this.components.map((value, index) => value - other.components[index]);
    return new Vector(result);
};

Vector.prototype.dot = function(other) {
    // Check if the other vector has the same length
    if (this.components.length !== other.components.length) {
        throw new Error("Vectors must be of the same length.");
    }
    return this.components.reduce((sum, value, index) => sum + value * other.components[index], 0);
};

Vector.prototype.norm = function() {
    const sumOfSquares = this.components.reduce((sum, value) => sum + value ** 2, 0);
    return Math.sqrt(sumOfSquares);
};

Vector.prototype.toString = function() {
    return `(${this.components.join(",")})`;
};

Vector.prototype.equals = function(other) {
    // Check if the other vector has the same length and components
    if (this.components.length !== other.components.length) {
        return false;
    }
    return this.components.every((value, index) => value === other.components[index]);
};
