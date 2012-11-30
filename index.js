/* !
 * matrix3
 * JavaScript 3d matrix library
 * Copyright (c) 2012 Enrico Marino
 * MIT License
 */

/**
 * Library namespace.
 */

var matrix3 = exports;

/**
 * Library version.
 */

matrix3.version = '0.1.1';

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
 * @param {Number} i index of row
 * @param {Number} j index of col
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
  values[0] = self[j];
  values[1] = self[j + 3];
  values[2] = self[j + 6];

  return values;
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

/**
 * sub
 * Subtract matrix.
 * 
 * @param {Float32Array} self destination matrix
 * @param {Float32Array} m matrix to add
 * @return {Float32Array} matrix
 * @api public
 */

matrix3.sub = function (self, m) {
  self[0] -= m[0];
  self[1] -= m[1];
  self[2] -= m[2];

  self[3] -= m[3];
  self[4] -= m[4];
  self[5] -= m[5];

  self[6] -= m[6];
  self[7] -= m[7];
  self[8] -= m[8];

  return self;
};

/**
 * mul
 * Multiply matrix.
 * 
 * @param {Float32Array} self destination matrix
 * @param {Float32Array} m matrix to add
 * @return {Float32Array} matrix
 * @api public
 */

matrix3.mul = function (self, m) {
  var a00 = self[0];
  var a10 = self[1];
  var a20 = self[2];

  var a01 = self[3];
  var a11 = self[4];
  var a21 = self[5];

  var a02 = self[6];
  var a12 = self[7];
  var a22 = self[8];

  var b00 = m[0];
  var b10 = m[1];
  var b20 = m[2];

  var b01 = m[3];
  var b11 = m[4];
  var b21 = m[5];

  var b02 = m[6];
  var b12 = m[7];
  var b22 = m[8];

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
 * rotation
 * Get rotation matrix.
 * 
 * @param {Float32Array} self destination matrix
 * @param {Number} angle rotation angle
 * @return {Float32Array} matrix
 * @api public
 */

matrix3.rotation = function (self, angle) {
  var cos_a = cos(angle);
  var sin_a = sin(angle);

  self[0] = cos_a;
  self[1] = sin_a;
  self[2] = 0.0;

  self[3] = -sin_a;
  self[4] = cos_a;
  self[5] = 0.0;

  self[6] = 0.0;
  self[7] = 0.0;
  self[8] = 1.0;

  return self;
};

/**
 * rotate
 * Rotate matrix.
 * 
 * @param {Float32Array} self destination matrix
 * @param {Number} angle rotation angle
 * @return {Float32Array} matrix
 * @api public
 */

matrix3.rotate = function (self, angle) {
  var m00 = self[0];
  var m10 = self[1];
  var m20 = self[2];

  var m01 = self[3];
  var m11 = self[4];
  var m21 = self[5];

  var m02 = self[6];
  var m12 = self[7];
  var m22 = self[8];

  self[0] = cos_a * m00 - sin_a * m10;
  self[1] = sin_a * m00 + cos_a * m10;

  self[3] = cos_a * m01 - sin_a * m11;
  self[4] = sin_a * m01 + cos_a * m11;

  self[6] = cos_a * m02 - sin_a * m12;
  self[7] = sin_a * m02 + cos_a * m12;

  return self;
};

/**
 * scaling
 * Get scaling matrix.
 * 
 * @param {Float32Array} self destination matrix
 * @param {Array} v scale factors
 * @return {Float32Array} matrix
 * @api public
 */

matrix3.scaling = function (self, v) {
  self[0] = v[0];
  self[1] = 0.0;
  self[2] = 0.0;

  self[3] = 0.0;
  self[4] = v[1];
  self[5] = 0.0;

  self[6] = 0.0;
  self[7] = 0.0;
  self[8] = 1.0;

  return self;
};

/**
 * scale
 * Scale matrix.
 * 
 * @param {Float32Array} self destination matrix
 * @param {Array} v scale factors
 * @return {Float32Array} matrix
 * @api public
 */

matrix3.scale = function (self, v) {
  self[0] *= v[0];
  self[1] *= v[0];
  self[2] *= v[0];

  self[3] *= v[1];
  self[4] *= v[1];
  self[5] *= v[1];

  self[6] *= v[2];
  self[7] *= v[2];
  self[8] *= v[2];

  return self;
};

/**
 * scale_x
 * Scale matrix on x coordinate.
 * 
 * @param {Float32Array} self destination matrix
 * @param {Array} value scale factor
 * @return {Float32Array} matrix
 * @api public
 */

matrix3.scale_x = function (self, value) {
  self[0] *= value;
  self[1] *= value;
  self[2] *= value;

  return self;
};

/**
 * scale_y
 * Scale matrix on x coordinate.
 * 
 * @param {Float32Array} self destination matrix
 * @param {Array} value scale factor
 * @return {Float32Array} matrix
 * @api public
 */

matrix3.scale.y = function (self, value) {
  self[3] *= value;
  self[4] *= value;
  self[5] *= value;

  return self;
};

/**
 * translation
 * Get translation matrix.
 * 
 * @param {Float32Array} self destination matrix
 * @param {Array} v translation vector
 * @return {Float32Array} matrix
 * @api public
 */

matrix3.translation = function (self, v) {
  self[0] = 1.0;
  self[1] = 0.0;
  self[2] = 0.0;

  self[3] = 0.0;
  self[4] = 1.0;
  self[5] = 0.0;

  self[6] = v[0];
  self[7] = v[1];
  self[8] = 1.0;

  return self;
};

/**
 * translate
 * Translate matrix.
 * 
 * @param {Float32Array} self destination matrix
 * @param {Array} v translation vector
 * @return {Float32Array} matrix
 * @api public
 */

matrix3.translate = function (self, v) {
  self[6] += self[0] * v[0] + self[3] * v[1];
  self[7] += self[1] * v[0] + self[4] * v[1];

  return self;
};

/**
 * translate_x
 * Translate matrix on x coordinate.
 * 
 * @param {Float32Array} self destination matrix
 * @param {Array} value translation value
 * @return {Float32Array} matrix
 * @api public
 */

matrix3.translate_x = function (self, value) {
  self[6] += self[0] * value;
  self[7] += self[1] * value;

  return self;
};

/**
 * translate_y
 * Translate matrix on x coordinate.
 * 
 * @param {Float32Array} self destination matrix
 * @param {Array} value translation value
 * @return {Float32Array} matrix
 * @api public
 */

matrix3.translate_y = function (self, y) {
  self[6] += self[3] * y;
  self[7] += self[4] * y;
  
  return self;
};

/**
 * transpose
 * Transpose.
 * 
 * @param {Float32Array} self destination matrix
 * @return {Float32Array} matrix
 * @api public
 */

matrix3.transpose = function (self) {
  var temp;

  temp = self[1];
  self[1] = self[3];
  self[3] = temp;

  temp = self[2];
  self[2] = self[6];
  self[6] = temp;

  temp = self[5];
  self[5] = self[7];
  self[7] = temp;

  return self;
};