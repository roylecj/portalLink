Meteor.methods({
    callViaduct: function (url) {
      console.log("callViaduct=" + url);

      try {
        var result = HTTP.call("GET", url,
        {
          followRedirects: true
        })
      } catch (e) {
        console.log(e);
      };

      console.log(result.content);

      return result.content;
    }
});
