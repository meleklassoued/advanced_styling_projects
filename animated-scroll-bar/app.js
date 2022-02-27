let progressBar = document.querySelector(".progress_bar");
let btnLoading = document.querySelector(".load");
let progressValuePercentage = 0;

btnLoading.addEventListener("click", () => {
  let interval = setInterval(() => {
    if (progressValuePercentage <= 115) {
      progressBar.style.width = `${progressValuePercentage}%`;
      progressValuePercentage += 1;
    } else {
       progressBar.style.width=`${0}%`
       clearInterval(interval);
    }
  }, 50);
});
