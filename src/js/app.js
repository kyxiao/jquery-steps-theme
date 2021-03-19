$(function () {
  console.log(111122);
  $("#example1").steps({
    headerTag: "h3",
    bodyTag: "section",
    autoFocus: true,
    // cssClass: "wizard",
    titleTemplate: '<span class="number">#index#</span> #title#',
    labels: {
      previous: "上一步",
      next: "下一步",
      finish: "完成",
    },
  });
  $("#example2").steps({
    headerTag: "h3",
    bodyTag: "section",
    autoFocus: true,
    titleTemplate: '<span class="number">#index#</span> #title#',
    labels: {
      previous: "上一步",
      next: "下一步",
      finish: "完成",
    },
    stepsOrientation: "vertical",
  });
  $("#example3").steps({
    headerTag: "h3",
    bodyTag: "section",
    autoFocus: true,
    cssClass: "wizard-round",
    titleTemplate: "#title#",
    labels: {
      previous: "上一步",
      next: "下一步",
      finish: "完成",
    },
  });
  $("#example4").steps({
    headerTag: "h3",
    bodyTag: "section",
    cssClass: "wizard-round",
    titleTemplate: "#title#",
    labels: {
      previous: "上一步",
      next: "下一步",
      finish: "完成",
    },
    stepsOrientation: "vertical",
  });
  $("#example5").steps({
    headerTag: "h3",
    bodyTag: "section",
    enableFinishButton: false,
    enablePagination: false,
    enableAllSteps: true,
    titleTemplate: "#title#",
    cssClass: "wizard-tabcontrol",
    labels: {
      previous: "上一步",
      next: "下一步",
      finish: "完成",
    },
  });
  $("#example6").steps({
    headerTag: "h3",
    bodyTag: "section",
    autoFocus: true,
    titleTemplate: '<span class="number">#index#</span> #title#',
    cssClass: "wizard-sub",
    labels: {
      previous: "上一步",
      next: "下一步",
      finish: "完成",
    },
  });
});
