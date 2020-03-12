window.onload = pageLoad;
function pageLoad() {
  var form = document.getElementById("myForm");
  form.onsubmit = validateForm;
}

function validateForm() {
  //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
  var Password = document.forms["myForm"]["password"].value;
  var Retype_password = document.forms["myForm"]["retype_password"].value;

  if (Password == Retype_password) {
    alert("Register Complete");
  } else {
    alert("รหัสผ่านไม่ถูกต้อง");
    return false;
  }
}
