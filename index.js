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
  
 }(this));