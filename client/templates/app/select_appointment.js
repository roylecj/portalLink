Template.selectAppointment.helpers({
  isSelected: function() {
    if (Session.get("ap_id_" + this.ap_id) === true) {
      return true
    } else {
      return false
    }
  },
  selectedAppt: function() {
    if (Session.get("ap_id_" + this.ap_id) === true) {
      return "btn-danger"
    } else {
      return "btn-info"
    }
  }
});

Template.selectAppointment.events({
  'click .btnAppointment': function(e, t) {
    if (Session.get("ap_id_" + this.ap_id) === true) {
      Session.set("ap_id_" + this.ap_id, false);
    } else {
      Session.set("ap_id_" + this.ap_id, true);
    }
  }
})
