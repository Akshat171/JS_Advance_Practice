const coding = ["js", "python", "c++", "ruby"];
coding.forEach(function (lang) {
  //   console.log(lang);
});

// using a call back function in foreach

// js
// python
// c++
// ruby

function print(item) {
  //   console.log(item);
}

coding.forEach(print);
//pass reference not executable function

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// js 0 [ 'js', 'python', 'c++', 'ruby' ]
// python 1 [ 'js', 'python', 'c++', 'ruby' ]
// c++ 2 [ 'js', 'python', 'c++', 'ruby' ]
// ruby 3 [ 'js', 'python', 'c++', 'ruby' ]

//Access of any parameter available in object in array
// usually this scenario we can see in API's

const lang = [
  {
    name: "javascript",
    short: "js",
  },
  {
    name: "python",
    short: "py",
  },
  {
    name: "C++",
    short: "cpp",
  },
  {
    name: "Ruby",
    short: "rb",
  },
];

lang.forEach((item) => {
  console.log(` we can grab short from api's as ${item.short}`);
});
