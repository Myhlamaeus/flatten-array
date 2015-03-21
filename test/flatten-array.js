"use strict";

import flattenArray from "../flatten-array.es6";

const assert = require("assert");

describe("flattenArray()", function() {
    it(`throws if not an array`, function() {
        assert.throws(function() {
            flattenArray();
        }, TypeError);
        assert.throws(function() {
            flattenArray(0);
        }, TypeError);
        assert.throws(function() {
            flattenArray(null);
        }, TypeError);
        assert.throws(function() {
            flattenArray({});
        }, TypeError);
        assert.throws(function() {
            flattenArray("");
        }, TypeError);
        assert.throws(function() {
            flattenArray({
                "0": "test",
                "length": 1
            });
        }, TypeError);
        assert.throws(function() {
            flattenArray(new Set(["test"]));
        }, TypeError);
    });

    it(`returns an empty array if an empty array is supplied`, function() {
        assert.deepEqual(flattenArray([]), []);
    });

    it(`returns an empty array if all elements are empty arrays`, function() {
        assert.deepEqual(flattenArray([[]]), []);
    });

    it(`returns a similar array if the argument is one-dimensional`, function() {
        assert.deepEqual(flattenArray([1, 2, 3, 4]), [1, 2, 3, 4]);
    });

    it(`returns a new array if argument is one-dimensional`, function() {
        assert.notEqual(flattenArray([1, 2, 3, 4]), [1, 2, 3, 4]);
    });

    it(`flattens mixed arrays and elements`, function() {
        assert.deepEqual(flattenArray([[1, 2], 3, [4], 5]), [1, 2, 3, 4, 5]);
    });
});
