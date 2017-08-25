Template.home.onRendered(function() {
  var urlString = "http://10.2.0.8:3030/?";

// debugger

  console.log("UrlString=" + urlString);

  var respValue = "";
  respValue = Meteor.call('callViaduct', urlString, function(e, result) {
//    console.log("response= " + result);

    var appt = JSON.parse(result)
    Session.set("appointment", appt);
  });

});

Template.home.helpers({
  patientName: function() {
    return "John Lewis"
  },
  bookingCode: function() {

    var appt = Session.get("appointment");

    return appt.appointmentDetails.appointmentTypeInfo[0].booking_code
  },
  appointmentList: function() {
    var appt = Session.get("appointment");

    var apptInner = "";

    apptInner =  appt.appointmentDetails.appointmentTypeInfo;
    for (i = 0; i < apptInner.length; i++) {
        Session.set("ap_id_" + apptInner[i].ap_id, true)
    }

    return appt.appointmentDetails.appointmentTypeInfo
  }
});
