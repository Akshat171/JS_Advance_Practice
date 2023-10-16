document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("clicked inside the ul");
  },
  false
);

document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    console.log("clicked on owl image");
    e.stopPropagation();
  },
  false
);

// This is called bubbling for example:
// there is <ul> in which img tag is available
//when we click on img tag then it print the console
//of img tag first then print console of ul tag
//which is its parent it is called bubbling / propagation
//in default mode it is stay false
//in if we want its reverse the use true
//if we want to stop propagation the use e.stopPropagation()

//Remove after click
document.querySelector("#images").addEventListener("click", function (e) {
  console.log(e.target.parentNode);

  let removeIt = e.target.parentNode;
  removeIt.remove();
  //   removeIt.parentNode.removeChild(removeIt);
  //flow
  //ul --> li--> img
});

//Event spill over
document.querySelector("#images").addEventListener("click", function (e) {
  console.log(e.target.tagName);
  if (e.target.tagName === "IMG") {
    console.log(e.target.id);
    let removeIt = e.target.parentNode;
    removeIt.remove();
  }
  //   removeIt.parentNode.removeChild(removeIt);
  //flow
  //ul --> li--> img
});
