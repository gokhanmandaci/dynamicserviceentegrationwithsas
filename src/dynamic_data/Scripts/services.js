//Campaign Service
var service1Params = {
    id : 29364,
    responseText : "",
    timeout : 1,
    httpMethod : "GET"
};
//Product Service
var service2Params = {
    id : 123456,
    responseText : "",
    timeout : 1,
    httpMethod : "GET"
};
//Create Conversation Service
var service3Params = {
    responseText : "",
    timeout : 1,
    email : "",
    pass : "",
    httpMethod : "POST",
    conversationID : ""
};
//Create Conversation Requeststring
var service3JSON = {
    email : "",
    password : ""
};

//Common Service Request Header Array
var commonRequestHeaders = [
    //request headers as array's elements
];

var service1 = new SMF.Net.WebClient({
        URL : "service1URL",
        httpMethod : service1Params.httpMethod,
        requestHeaders : commonRequestHeaders,
        onSyndicationSuccess : function (e) {
            service1Params.responseText = JSON.parse(this.responseText);
            Data.DS_First.clear();
            var i;
            //loop is for creating an empty dataset for repeatbox (there is a develeoplent process for repeatbox source but now only way to assign a source to a repeatbox is a dataset)
            for (i = 0; i < service1Params.responseText.data.length; i++) {
                Data.DS_First.add();
                Data.DS_First.field1 = service1Params.responseText.data[i].id;
                Data.DS_First.field1 = service1Params.responseText.data[i].name;
                Data.DS_First.field1 = service1Params.responseText.data[i].price;
            }
            Data.DS_First.commit();
        },
        onServerError : function (e) {
            commonServerErrorControlResponseText = this.responseText;

        },
        requestString : '',
        timeoutInterval : service1Params.timeout
    });

var service2 = new SMF.Net.WebClient({
        //can change url parameters
        URL : "service2URL" + service2Params.id,
        httpMethod : service2Params.httpMethod,
        requestHeaders : commonRequestHeaders,
        onSyndicationSuccess : function (e) {
            service2Params.responseText = JSON.parse(this.responseText);
        },
        onServerError : function (e) {
            alert(this.status);
        },
        requestString : '',
        timeoutInterval : service2Params.timeout
    });

var service3 = new SMF.Net.WebClient({
        URL : "service3URL",
        httpMethod : service3Params.httpMethod,
        requestHeaders : commonRequestHeaders,
        onSyndicationSuccess : function (e) {
            service3Params.responseText = JSON.parse(this.responseText);
            service3Params.conversationID = service3Params.responseText.conversationID;
        },
        onServerError : function (e) {
            alert(this.status);
        },
        timeoutInterval : service3Params.timeout
    });