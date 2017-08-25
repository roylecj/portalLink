Template.instructionItems.helpers({
  instructionText: function() {

    var prepText = "";

    prepText = this.prep_text;

    if (prepText === "") {
      return "No instructions for this appointment"
    }

    prepText = s.replaceAll(prepText, "%0D%0A%0D%0A", "<p></p>");

    prepText = s.replaceAll(prepText, "%0D%0A", "<p></p>");

    return prepText;
  },
  isSelected: function() {
    if (Session.get("ap_id_" + this.ap_id) === true) {
      return true
    } else {
      return false
    }
  }
});
