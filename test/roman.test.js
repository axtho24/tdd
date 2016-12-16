let assert = require ('assert')
let romanify = require('../js/roman')

// make a converter to turn numbers into Roman numerals
// like 1 => "I"
// 2 => "II"
// 3 => "III"
// 4 => "IV"
// 5 => "V"
// 6 => "VI"
// 7 => "VII"
// looks like the inputs are always one number at a time
// and the output is a strings


// write a test that fails
// write enough code that the test will pass
// once you see patterns refactor code to see what you can clean up

describe('Roman numeral converter', function () {
  it('converts 1 to I', function () {
    let result = romanify(1)
    assert.equal(result, "I")
  })
  it('converts 2 to II', function () {
    let result = romanify(2)
    assert.equal(result, "II")
  })
  it('converts 3 to III', function () {
    let result = romanify(3)
    assert.equal(result, "III")
  })
  it('converts 4 to IV', function () {
    let result = romanify(4)
    assert.equal(result, "IV")
  })
  it('converts 5 to V', function () {
    let result = romanify(5)
    assert.equal(result, "V")
  })
  it('converts 6 to VI', function () {
    let result = romanify(6)
    assert.equal(result, "VI")
  })
  it('converts 9 to IX', function () {
    let result = romanify(9)
    assert.equal(result, "IX")
  })
  it('converts 10 to X', function () {
    let result = romanify(10)
    assert.equal(result, "X")
  })
  it('converts 13 to XIII', function () {
    let result = romanify(13)
    assert.equal(result, "XIII")
  })
  it('converts 14 to XIV', function () {
    let result = romanify(14)
    assert.equal(result, "XIV")
  })
  it('converts 39 to XXXIX', function () {
    let result = romanify(39)
    assert.equal(result, "XXXIX")
  })
  it('converts 96 to XCVI', function () {
    let result = romanify(96)
    assert.equal(result, "XCVI")
  })
  it('converts 2017 to MMXVII', function () {
    let result = romanify(2017)
    assert.equal(result, "MMXVII")
  })
  describe('when input is a string', function() {
    it('converts "1" to "I"', function (){
      let result = romanify("1")
      assert.equal(result, "I")
    })
  })
})
