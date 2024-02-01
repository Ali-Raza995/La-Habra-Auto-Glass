document
  .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
  .forEach((faqItem) => {
    faqItem.addEventListener("click", () => {
      faqItem.parentNode.classList.toggle("faq-active");
    });
  });

jQuery(document).ready(function () {
  jQuery("#quote_form").submit(function (e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = jQuery(this).serialize();
    // var actionUrl = form.attr('action');

    console.log("data=" + form);

    jQuery.ajax({
      type: "POST",
      url: "schedule.php",
      data: form, // serializes the form's elements.
      success: function (data) {
        console.log("data=" + data); // show response from the php script.
        jQuery("#response").html(data);
      },
    });
  });
});
