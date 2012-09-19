/* !
 * matrix3
 * JavaScript math library for 3d matrix
 * Copyright (c) 2012 Enrico Marino (http://onirame.no.de)
 * MIT License
 */

 !(function (exports) {

  /**
   * Library namespace.
   */

  var matrix3 = exports.matrix3 = {};

  /**
   * Library version.
   */

  matrix3.version = '0.0.0';

  /**
   * create
   * Create a 3d matrix.
   * 
   * @param {Float32Array} m values
   * @return {Float32Array} 2d matrix
   * @api public
   */

  matrix3.create = function (m) {
    var values = m || [
        1.0, 0.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 0.0, 1.0
      ];

    return new Float32Array(values);
  };

  /**
   * copy
   * Copy matrix.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Float32Array} m source matrix
   * @return {Float32Array} destination matrix
   * @api public
   */

  matrix3.copy = function (self, m) {
    self[0] = m[0];
    self[1] = m[1];
    self[2] = m[2];

    self[3] = m[3];
    self[4] = m[4];
    self[5] = m[5];

    self[6] = m[6];
    self[7] = m[7];
    self[8] = m[8];

    return self;
  };

  /**
   * zero
   * Set matrix to zero.
   * 
   * @param {Float32Array} self destination matrix
   * @return {Float32Array} destination matrix
   * @api public
   */

  matrix3.zero = function (self) {
    self[0] = 0.0;
    self[1] = 0.0;
    self[2] = 0.0;

    self[3] = 0.0;
    self[4] = 0.0;
    self[5] = 0.0;

    self[6] = 0.0;
    self[7] = 0.0;
    self[8] = 0.0;

    return self;
  };

  /**
   * identity
   * Set matrix to identity.
   * 
   * @param {Float32Array} self matrix
   * @return {Float32Array} matrix
   * @api public
   */

  matrix3.identity = function (self) {
    self[0] = 1.0;
    self[1] = 0.0;
    self[2] = 0.0;

    self[3] = 0.0;
    self[4] = 1.0;
    self[5] = 0.0;

    self[6] = 0.0;
    self[7] = 0.0;
    self[8] = 1.0;

    return self;
  };

  /**
   * set
   * Set the i-th value of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} i index (from 0 to 8)
   * @param {Number} value the i-th value of the matrix 
   * @return {Float32Array} matrix
   * @api public
   */

  matrix3.set = function (self, i, value) {
    self[i] = value;

    return self;
  };

  /**
   * set_value
   * Set the value at i-th row, j-th col of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} i index of row
   * @param {Number} j index of col
   * @param {Number} value value to set 
   * @return {Float32Array} matrix
   * @api public
   */

  matrix3.set_value = function (self, i, j, value) {
    self[i + 3*j] = value;

    return self;
  };

  /**
   * set_row
   * Set the i-th row of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} i index of row
   * @param {Number} values values to set 
   * @return {Float32Array} matrix
   * @api public
   */

  matrix3.set_row = function (self, i, values) {
    self[i    ] = values[0];
    self[i + 3] = values[1];
    self[i + 6] = values[2];

    return self;
  };

  /**
   * set_col
   * Set the j-th col of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} j index of col
   * @param {Number} values values to set 
   * @return {Float32Array} matrix
   * @api public
   */

  matrix3.set_col = function (self, j, values) {
    self[    3*j] = values[0];
    self[1 + 3*j] = values[1];
    self[2 + 3*j] = values[2];

    return self;
  };

  /**
   * get
   * Get the i-th value of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} i index (from 0 to 8)
   * @return {Number} the i-th value of the matrix 
   * @api public
   */

  matrix3.get = function (self, i) {
    return self[i];
  };

  /**
   * get_value
   * Get the value at the i-th row, j-th col of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} row index of row
   * @param {Number} col index of col
   * @return {Number} the value of the matrix 
   * @api public
   */

  matrix3.get_value = function (self, i, j) {
    return self[i + 3*j];
  };
  
  /**
   * get_row
   * Get the i-th row of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} i index of row
   * @param {Number} values values to set 
   * @return {Float32Array} the i-th row of the matrix
   * @api public
   */

  matrix3.get_row = function (self, i, values) {
    values[0] = self[i];
    values[1] = self[i + 3];
    values[2] = self[i + 6];

    return values;
  };

  /**
   * get_col
   * Get the j-th col of the matrix.
   * 
   * @param {Float32Array} self matrix
   * @param {Number} j index of row
   * @param {Number} values values to set 
   * @return {Float32Array} matrix
   * @api public
   */

  matrix3.get_col = function (self, j, values) {
    if (vector === undefined) {
      vector = new Float32Array([0.0, 0.0]);
    }
    
    vector[0] = self[j + 0];
    vector[1] = self[j + 2];

    return vector;
  };

  /**
   * sum
   * Get the sum of matrix a and b.
   * 
   * @param {Float32Array} self matrix
   * @param {Float32Array} a matrix
   * @param {Float32Array} b matrix
   * @return {Float32Array} matrix
   * @api public
   */

  matrix3.sum = function (self, a, b) {
    self[0] = a[0] + b[0];
    self[1] = a[1] + b[1];
    self[2] = a[2] + b[2];

    self[3] = a[3] + b[3];
    self[4] = a[4] + b[4];
    self[5] = a[5] + b[5];

    self[6] = a[6] + b[6];
    self[7] = a[7] + b[7];
    self[8] = a[8] + b[8];

    return self;
  };

  /**
   * diff
   * Get the difference of matrix a and b.
   * 
   * @param {Float32Array} self matrix
   * @param {Float32Array} a matrix
   * @param {Float32Array} b matrix
   * @return {Float32Array} matrix
   * @api public
   */

  matrix3.diff = function (self, a, b) {
    self[0] = a[0] - b[0];
    self[1] = a[1] - b[1];
    self[2] = a[2] - b[2];

    self[3] = a[3] - b[3];
    self[4] = a[4] - b[4];
    self[5] = a[5] - b[5];

    self[6] = a[6] - b[6];
    self[7] = a[7] - b[7];
    self[8] = a[8] - b[8];

    return self;
  };

  /**
   * prod
   * Get the product of matrix a and b.
   * 
   * @param {Float32Array} self matrix
   * @param {Float32Array} a matrix
   * @param {Float32Array} b matrix
   * @return {Float32Array} matrix
   * @api public
   */

  mat3.prod = function (self, a, b) {
    var a00 = a[0];
    var a10 = a[1];
    var a20 = a[2];

    var a01 = a[3];
    var a11 = a[4];
    var a21 = a[5];

    var a02 = a[6];
    var a12 = a[7];
    var a22 = a[8];

    var b00 = b[0];
    var b10 = b[1];
    var b20 = b[2];

    var b01 = b[3];
    var b11 = b[4];
    var b21 = b[5]

    var b02 = b[6];
    var b12 = b[7];
    var b22 = b[8];

    self[0] = a00 * b00 + a01 * b10 + a02 * b20;
    self[1] = a10 * b00 + a11 * b10 + a12 * b20;
    self[2] = a20 * b00 + a21 * b10 + a22 * b20;

    self[3] = a00 * b01 + a01 * b11 + a02 * b21;
    self[4] = a10 * b01 + a11 * b11 + a12 * b21;
    self[5] = a20 * b01 + a21 * b11 + a22 * b21;

    self[6] = a00 * b02 + a01 * b12 + a02 * b22;
    self[7] = a10 * b02 + a11 * b12 + a12 * b22;
    self[8] = a20 * b02 + a21 * b12 + a22 * b22;

    return self;
  };

  /**
   * add
   * Add matrix.
   * 
   * @param {Float32Array} self destination matrix
   * @param {Float32Array} m matrix to add
   * @return {Float32Array} matrix
   * @api public
   */

  matrix3.add = function (self, m) {
    self[0] += m[0];
    self[1] += m[1];
    self[2] += m[2];

    self[3] += m[3];
    self[4] += m[4];
    self[5] += m[5];

    self[6] += m[6];
    self[7] += m[7];
    self[8] += m[8];

    return self;
  };
  
}(this));