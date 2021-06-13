const selectLink = document.querySelector(".header-column:first-child select"),
  linkForm = document.querySelector("header-form"),
  searchValue = document.querySelector(".header-form_input"),
  searchIcon = document.querySelector(".search-icon");

const NAVER = "https://search.naver.com/search.naver?query=";
const GOOGLE = "https://www.google.com/search?q=";

let link = "";

function handleClick() {
  const wantSearch = searchValue.value;
  if (link === "naver") {
    location.href = NAVER + wantSearch;
  } else if (link === "google") {
    location.href = GOOGLE + wantSearch;
  } else {
    alert("LINK를 선택해주세요.");
  }
}

function clickIcon() {
  searchIcon.addEventListener("click", handleClick);
}

function handleChange(event) {
  const linkText = event.target.value;
  link = linkText;
}

function searchlink() {
  selectLink.addEventListener("change", handleChange);
}
searchlink();
clickIcon();
