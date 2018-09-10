// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Multiple dummy friends makes it easier to test!
// ===============================================================================

var userData = [
    {
      "name": "Ahmed",
      "photo": "https://unsplash.com/photos/h13Y8vyIXNU",
      "scores":[
          5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
      ]
    },
    {
      "name": "Joe",
      "photo": "https://unsplash.com/photos/sseiVD2XsOk",
      "scores":[
          3,
          2,
          2,
          4,
          1,
          1,
          5,
          1,
          3,
          1
      ]
    },
    {
      "name": "Jane",
      "photo": "https://unsplash.com/photos/2Ts5HnA67k8",
      "scores":[
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
      ]
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = userData;