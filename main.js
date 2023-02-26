const progressDiv = document.querySelector(".progress-div"),
  progressBars = document.querySelectorAll(".progress-bar"),
  CounterDiv = document.querySelector(".counter-div"),
  CountersTag = document.querySelectorAll(".counter-div h3");
ScrollOut({
  targets: ".progress-div , .counter-div",
});
window.addEventListener("scroll", function () {
  //Progress
  if (progressDiv.dataset.scroll == "in") {
    progressBars.forEach((element) => {
      let ValueNow = element.getAttribute("aria-valuenow");
      element.style.width = ValueNow + "%";
      let CounterSpan = element.parentElement.parentElement.querySelector(
        ".progress-value span"
      );
      let timer = setInterval(() => {
        if (Number(CounterSpan.textContent) < ValueNow) {
          CounterSpan.textContent = Number(CounterSpan.textContent) + 1;
        } else {
          clearInterval(timer);
        }
      }, 500);
    });
  } else {
    progressBars.forEach((element) => {
      element.style.width = 0 + "%";
      element.parentElement.parentElement.querySelector(
        ".progress-value span"
      ).textContent = 0;
    });
  }
  //Counter
  if (CounterDiv.dataset.scroll == "in") {
    CountersTag.forEach((element) => {
      let time = setInterval(() => {
        if (Number(element.innerText) < element.dataset.counter) {
          element.innerText = Number(element.innerText) + 1;
        } else {
          clearInterval(time);
        }
      }, 1000);
    });
  } else {
    CountersTag.forEach((element) => {
      element.innerText = 0;
    });
  }
});
/*Filter Items*/
const filterListItems = document.querySelectorAll(".list-group li"),
  filteredItems = document.querySelectorAll(".filterd-item a");
filterListItems.forEach((list) => {
  list.addEventListener("click", () => {
    document.querySelector(".list-group li.active").classList.remove("active");
    list.classList.add("active");
    let FilteredValue = list.dataset.filter;
    filteredItems.forEach((item) => {
      if (item.classList.contains(FilteredValue)) {
        item.classList.remove("hidden");
        item.classList.add("active");
      } else {
        item.classList.remove("active");
        item.classList.add("hidden");
      }
    });
  });
});
/*light gallery*/
AOS.init();
