// must revise later

// global close button ???
// var closeToggle = document.querySelector(".close-button");
// closeToggle.addEventListener("click", function() {
//   document.querySelector(".info-block.info-block-visible").classList.toggle("info-block-visible").setAttribute('aria-hidden', true);
//   document.querySelector("html").classList.remove("info-block-visible");
// });

var rwdToggle = document.querySelector(".rwd.info-toggle");
var uxToggle = document.querySelector(".ux.info-toggle");
var ixdToggle = document.querySelector(".ixd.info-toggle");
var logToggle = document.querySelector(".log-info-toggle");

rwdToggle.addEventListener("click", function() {
  document.querySelector("#rwd").setAttribute('aria-hidden', false);
  document.querySelector("#rwd").classList.toggle("info-block-visible");
  document.querySelector("html").classList.remove("info-block-hidden");
  document.querySelector("html").classList.add("info-block-visible");
});

uxToggle.addEventListener("click", function() {
  document.querySelector("#ux").setAttribute('aria-hidden', false);
  document.querySelector("#ux").classList.toggle("info-block-visible");
  document.querySelector("html").classList.remove("info-block-hidden");
  document.querySelector("html").classList.add("info-block-visible");
});

ixdToggle.addEventListener("click", function() {
   document.querySelector("#ixd").setAttribute('aria-hidden', false);
  document.querySelector("#ixd").classList.toggle("info-block-visible");
  document.querySelector("html").classList.remove("info-block-hidden");
  document.querySelector("html").classList.add("info-block-visible");
});

logToggle.addEventListener("click", function() {
  document.querySelector("#build-log").setAttribute('aria-hidden', false);
  document.querySelector("#build-log").classList.toggle("info-block-visible");
  document.querySelector("html").classList.remove("info-block-hidden");
  document.querySelector("html").classList.add("info-block-visible");
});

var closeRWDBlock = document.querySelector("#rwd .close-button");
closeRWDBlock.addEventListener("click", function() {
  document.querySelector("#rwd.info-block-visible").setAttribute('aria-hidden', true);
  document.querySelector("#rwd.info-block-visible").classList.toggle("info-block-visible");
  document.querySelector("html").classList.remove("info-block-visible");
  document.querySelector("html").classList.add("info-block-hidden");
});

var closeUXBlock = document.querySelector("#ux .close-button");
closeUXBlock.addEventListener("click", function() {
  document.querySelector("#ux.info-block-visible").setAttribute('aria-hidden', true);
  document.querySelector("#ux.info-block-visible").classList.toggle("info-block-visible");
  document.querySelector("html").classList.remove("info-block-visible");
  document.querySelector("html").classList.add("info-block-hidden");
});

var closeLogBlock = document.querySelector("#build-log .close-button");
closeLogBlock.addEventListener("click", function() {
  document.querySelector("#build-log.info-block-visible").setAttribute('aria-hidden', true);
  document.querySelector("#build-log.info-block-visible").classList.toggle("info-block-visible");
  document.querySelector("html").classList.remove("info-block-visible");
  document.querySelector("html").classList.add("info-block-hidden");
});