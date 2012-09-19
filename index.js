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

 }(this));