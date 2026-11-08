/* ============================================================
   DHAKA PILES CARE CENTER — interactions (jQuery)
   header state, drawer, accordion, back-to-top, smooth anchors,
   lightbox (Magnific), click-to-load map, enquiry form -> mailto
   ============================================================ */
(function ($) {
  "use strict";

  var PHONE_TEL = "tel:+8801716528757";
  var MAIL_TO = "mailto:dhakapilescarecenter@gmail.com";

  $(function () {

    /* Footer year */
    $("#year").text(String(new Date().getFullYear()));

    /* Sticky header shadow */
    var $head = $(".site-head");
    var onScroll = function () {
      $head.toggleClass("scrolled", $(window).scrollTop() > 8);
      $(".to-top").toggleClass("show", $(window).scrollTop() > 600);
    };
    $(window).on("scroll", onScroll);
    onScroll();

    /* Drawer (mobile nav) */
    var $burger = $(".burger"), $drawer = $("#drawer"), $overlay = $(".drawer-overlay");
    function openDrawer() {
      $drawer.removeAttr("hidden");
      $overlay.removeAttr("hidden");
      requestAnimationFrame(function () {
        $drawer.addClass("open"); $overlay.addClass("open");
      });
      $burger.attr("aria-expanded", "true");
      $("body").css("overflow", "hidden");
      $drawer.find(".drawer-close").trigger("focus");
    }
    function closeDrawer() {
      $drawer.removeClass("open"); $overlay.removeClass("open");
      $burger.attr("aria-expanded", "false");
      $("body").css("overflow", "");
      window.setTimeout(function () {
        $drawer.attr("hidden", true); $overlay.attr("hidden", true);
      }, 240);
      $burger.trigger("focus");
    }
    $burger.on("click", openDrawer);
    $drawer.find(".drawer-close").on("click", closeDrawer);
    $overlay.on("click", closeDrawer);
    $(document).on("keydown", function (e) {
      if (e.key === "Escape" && $drawer.hasClass("open")) closeDrawer();
    });
    $drawer.find("a").on("click", function () { closeDrawer(); });

    /* Accordion */
    $(".acc-btn").on("click", function () {
      var $btn = $(this), $item = $btn.closest(".acc-item"), $panel = $item.find(".acc-panel");
      var open = $btn.attr("aria-expanded") === "true";
      $btn.attr("aria-expanded", String(!open));
      $item.toggleClass("open", !open);
      if (open) { $panel.css("max-height", ""); }
      else { $panel.css("max-height", $panel.prop("scrollHeight") + "px"); }
    });

    /* Back to top */
    $(".to-top").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 420);
    });

    /* Smooth in-page anchors */
    $(document).on("click", 'a[href^="#"]:not([href="#"])', function (e) {
      var target = document.getElementById(this.hash.slice(1));
      if (target) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: $(target).offset().top }, 420);
      }
    });

    /* Gallery lightbox */
    if ($.fn.magnificPopup) {
      $(".lightbox").magnificPopup({
        type: "image",
        gallery: { enabled: true, tPrev: "Previous", tNext: "Next", tCounter: "%curr% / %total%" },
        closeOnContentClick: true,
        mainClass: "mfp-fade"
      });
    }

    /* Google Maps load by default — iframe injected on ready, placeholder cleared when loaded */
    $(".map-card").each(function () {
      var $card = $(this), src = $card.data("map-src");
      if (!src) return;
      var $iframe = $('<iframe class="map-iframe" src="' + src + '" loading="lazy" ' +
        'referrerpolicy="no-referrer-when-downgrade" allowfullscreen ' +
        'title="Google Map — Dhaka Piles Care Center"></iframe>');
      $iframe.on("load", function () { $card.addClass("map-loaded"); });
      $card.append($iframe);
    });

    /* Enquiry form -> pre-filled mailto (no backend, no fake submit) */
    $("#enquiryForm").on("submit", function (e) {
      e.preventDefault();
      var $form = $(this), ok = true;

      function setError($field, hasError) {
        $field.toggleClass("invalid", hasError);
        $field.find(".err").attr("aria-hidden", String(!hasError));
        if (hasError) ok = false;
      }

      var $name = $form.find("[name=name]");
      var $phone = $form.find("[name=phone]");
      var $day = $form.find("[name=day]");
      var $concern = $form.find("[name=concern]");
      var $message = $form.find("[name=message]");

      setError($name.closest(".field"), !$.trim($name.val()));
      var phone = $.trim($phone.val());
      setError($phone.closest(".field"), !/^[0-9+\-\s()]{6,20}$/.test(phone));

      if (!ok) {
        $form.find(".field.invalid input, .field.invalid select, .field.invalid textarea").first().trigger("focus");
        return;
      }

      var subject = "Appointment enquiry — website";
      var lines = [
        "Name: " + $.trim($name.val()),
        "Phone: " + phone,
        "Preferred day/time: " + ($.trim($day.val()) || "-"),
        "Concern: " + ($.trim($concern.val()) || "-"),
        "",
        "Message: " + ($.trim($message.val()) || "-")
      ];
      var href = MAIL_TO + "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(lines.join("\n"));
      $form.find(".form-note").attr("aria-hidden", "false");
      window.location.href = href;
    });
    $("#enquiryForm").on("input change", ".field.invalid :input", function () {
      $(this).closest(".field").removeClass("invalid");
    });

    /* AOS reveals */
    if (window.AOS) {
      AOS.init({
        once: true,
        duration: 650,
        offset: 80,
        easing: "ease-out-cubic",
        disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      });
    }
  });
})(jQuery);
