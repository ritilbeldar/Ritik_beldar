$(function () {
  "use strict";
  var t = $(window);
  $.scrollIt({
    upKey: 38,
    downKey: 40,
    easing: "swing",
    scrollTime: 600,
    activeClass: "active",
    onPageChange: null,
    topOffset: -80,
  }),
    t.on("scroll", function () {
      var a = t.scrollTop(),
        o = $(".navbar");
      a > 100 ? o.addClass("nav-scroll") : o.removeClass("nav-scroll");
    }),
    t.on("scroll", function () {
      var a = t.scrollTop(),
        o = $(".nav-light"),
        s = $(".nav-light .logo> img");
      a > 100
        ? (o.addClass("nav-scroll"), s.attr("src", "img/logo-dark.png"))
        : (o.removeClass("nav-scroll"), s.attr("src", "img/logo-light.png"));
    }),
    $(".navbar-nav a").on("click", function () {
      $(".navbar-collapse").removeClass("show");
    }),
    t.on("scroll", function () {
      $(".skill-progress .progres").each(function () {
        var t = $(this).offset().top + $(this).outerHeight(),
          a = $(window).scrollTop() + $(window).height(),
          o = $(this).attr("data-value");
        a > t && $(this).css({ width: o });
      });
    }),
    $(".bg-img, section").each(function (t) {
      $(this).attr("data-background") &&
        $(this).css(
          "background-image",
          "url(" + $(this).data("background") + ")"
        );
    }),
    $(".gallery").magnificPopup({
      delegate: ".popimg",
      type: "image",
      gallery: { enabled: !0 },
    });
}),
  $(window).on("load", function () {
    var t = $(window);
    $(".loading").fadeOut(500),
      t.stellar(),
      $(".gallery").isotope({
        itemSelector: ".items",
        percentPosition: !0,
        masonry: { columnWidth: ".width2" },
      });
    var a = $(".gallery").isotope({});
    $(".filtering").on("click", "span", function () {
      var t = $(this).attr("data-filter");
      a.isotope({ filter: t });
    }),
      $(".filtering").on("click", "span", function () {
        $(this).addClass("active").siblings().removeClass("active");
      }),
      $("#contact-form").validator(),
      $("#contact-form").on("submit", function (t) {
        if (!t.isDefaultPrevented()) {
          return (
            $.ajax({
              type: "POST",
              url: "contact.php",
              data: $(this).serialize(),
              success: function (t) {
                var a = "alert-" + t.type,
                  o = t.message,
                  s =
                    '<div class="alert ' +
                    a +
                    ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
                    o +
                    "</div>";
                a &&
                  o &&
                  ($("#contact-form").find(".messages").html(s),
                  $("#contact-form")[0].reset());
              },
            }),
            !1
          );
        }
      });
  });

document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById("downloadButton");
    const cvFileName = "./images/Ritik Beldar CV.pdf"; // Corrected file path
    
    downloadButton.addEventListener("click", function() {
        const link = document.createElement("a");
        link.href = cvFileName;
        link.download = "Ritik Beldar CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
