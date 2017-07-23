// sets flags when writing the user's current CSV to the server
function saveSession(){
  saveFlag = true;
  init();
  saveFlag = false;
}

// sets flags and file name when loading current user's CSV from server
function loadMySession(){
  serverDownloadFlag = true;
  userUploadFlag = false;
  nameOfLoadFile = userSessionID;
  init();
}

// sets flags and file name when loading other user's CSV from server
function loadOtherSession(){
  serverDownloadFlag = true;
  userUploadFlag = false;
}

// loads the session ID into sharing form
function shareSessionID(element){
  if(userSessionID!=null) element.value = userSessionID;
}

// gets a session ID from user and uses it to load the corresponding user's CSV
document.getElementById('paste_session_id').onkeydown = function(event) {
  var e = event || windows.event;
  if (e.keyCode==13){
    nameOfLoadFile = document.getElementById('paste_session_id').value; // gets the session_id from the form for accessing other user's CSV's
    loadOtherSession(); // set flags and file name
    init();
  }
}

function generateSessionID(length) {
  var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';

  for (var i = length; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

//Save CSV to uploader/upload path via an ajax call
//The saved CSV can be use for other user as it is public
function saveByFile(userCSV) {
  console.log("saveByFile()");
  var data = new FormData();
  data.append("input_csv", userCSV);
  data.append("name", userCSV.name)
  data.append("session_id", userSessionID);

  $.ajax({
    url: 'uploader/upload-manager.php',
    type: 'POST',
    data: data,
    cache: false,
    processData: false, // Don't process the files
    contentType: false, // jQuery will tell the server its a query string request
    success: function(data, textStatus, jqXHR) {
      if (typeof data.error === 'undefined') {
        // Success so call function to process the form
        //submitForm(event, data);
  console.log('Success' + textStatus);
      } else {
        // Handle errors here
        console.log('ERRORS: ' + data.error);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log('ERRORS: ' + textStatus);
    }
  });
}

//Save CSV to uploader/upload path via an ajax call
//The saved CSV can be use for other user as it is public
function saveByName() {
  console.log("saveByName()");
/*
  var data = new FormData();
  data.append("input_csv", userCSV);
  data.append("name", userCSV.name)
  data.append("session_id", userSessionID);

  $.ajax({
    url: 'uploader/upload-manager.php',
    type: 'POST',
    data: data,
    cache: false,
    processData: false, // Don't process the files
    contentType: false, // jQuery will tell the server its a query string request
    success: function(data, textStatus, jqXHR) {
      if (typeof data.error === 'undefined') {
        // Success so call function to process the form
        //submitForm(event, data);
  console.log('Success' + textStatus);
      } else {
        // Handle errors here
        console.log('ERRORS: ' + data.error);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log('ERRORS: ' + textStatus);
    }
  });
*/
}
