// sets flags when writing the user's current CSV to the server
function saveSession(){
  saveFlag = true;
  init();
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
