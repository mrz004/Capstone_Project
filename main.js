// alert("hello");

const digtype = document.getElementById("digtype");
const genDigBtn = document.getElementById("genDigBtn");
const hambug = document.getElementById("hambug");
const searchForm = document.getElementById("searchForm");
const dataType = [
  document.getElementById("tableDirectData"),
  document.getElementById("tableURL"),
  document.getElementById("tableFile"),
];
let searchVisible = false;

responsive();

window.addEventListener("resize", responsive);

hambug.addEventListener("click", showhide);

for (const i of dataType) {
  i.addEventListener("click", changeDataType);
}

function changeDataType(event) {
  const element = document.getElementById(event.target.id);
  for (const i of dataType) {
    i.classList.remove("active");
  }
  element.classList.add("active");
  switch (element.id) {
    case "tableDirectData":
      break;
    case "tableURL":
      document.getElementById("fileupload").style.display = "none";
      document.getElementById("urlinput").style.display = "block";
      break;
      case "tableFile"
  }
}

function responsive() {
  if (window.innerWidth < 1035) {
    digtype.classList.remove("col-4");
    digtype.classList.add("form-control");
  } else {
    digtype.classList.add("col-4");
    digtype.classList.remove("form-control");
  }
}

function showhide() {
  if (searchVisible) {
    searchForm.style.display = "none";
    searchVisible = false;
  } else {
    searchForm.style.display = "block";
    searchVisible = true;
  }
  // console.log('clicked')
}
