$(document).ready(function () {
  console.log("hi");
  $("#jq").on("click", function (e) {
    $(`this`).append(`<div class="card">SUP</div>`);
  });
});
