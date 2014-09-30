function Page1_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
function Page1_Self_OnShow() {
    //Uncomment following block for navigationbar/actionbar sample
    /*
    //Copy this code block to every page onShow
    header.init(this);
    header.setTitle("Page1");
    header.setRightItem("Click");
    header.setLeftItem();
    /**/
}
function Page1_TextButton1_OnPressed(e) {
    service1.run();
}
function Page1_TextButton2_OnPressed(e) {
    service2Params.id = 1234567;
    service2.run();
}
function Page1_TextButton3_OnPressed(e) {
    service3JSON.email = "email@asdf.com";
    service3JSON.password = "123456";
    //request string must be updated if body params are dynamicaly change
    service3.requestString = JSON.stringify(service3JSON);
    service3.run();
}