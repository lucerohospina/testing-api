// https://api.mindbodyonline.com/0_5/SiteService.asmx?wsdl
// https://api.mindbodyonline.com/0_5/ClientService.asmx?wsdl
// https://api.mindbodyonline.com/0_5/ClientService.asmx
// KEY: WQbt/ZB33HdcpqEVbabRVNgHLCE=

function testingApi() {
var request = new XMLHttpRequest();
request.open('POST', ' http://api.mindbodyonline.com/0_5/ClientService.asmx');
// var sr = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="http://clients.mindbodyonline.com/api/0_5_1">' +
// '<soapenv:Header/>' +
// '<soapenv:Body>' +
//    '<AddOrUpdateClients>' +
//       '<Request>' +
//          '<SourceCredentials>' +
//             '<SourceName>KO</SourceName>' +
//             '<Password>oVpxE4bjRaeu3yT8xPRsjhCYBxk=</Password>' +
//             '<SiteIDs>' +
//                '<int>-99</int>' +
//             '</SiteIDs>' +
//          '</SourceCredentials>' +
//          '<UserCredentials>' +
//             '<Username>Siteowner</Username>' +
//             '<Password>apitest1234</Password>' +
//             '<SiteIDs>' +
//                '<int>-99</int>' +
//             '</SiteIDs>' +
//             '<LocationID>0</LocationID>' +
//          '</UserCredentials>' +
//          '<XMLDetail>Full</XMLDetail>' +
//          '<PageSize>10</PageSize>' +
//          '<CurrentPageIndex>0</CurrentPageIndex>' +
//          '<Clients>' +
//             '<Client>' +
//                '<FirstName>Joe</FirstName>' +
//                '<LastName>Smith</LastName>' +
//                '<BirthDate>1989-12-12</BirthDate>' +
//             '</Client>' +
//          '</Clients>' +
//       '</Request>' +
//    '</AddOrUpdateClients>' +
// '/soapenv:Body>' +
// '</soapenv:Envelope>';

// var sr = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="http://clients.mindbodyonline.com/api/0_5">' +
// '<soapenv:Header/>' +
// '<soapenv:Body>' +
//   '<AddClientsToClasses>' +
//       '<Request>' +
//          '<SourceCredentials>' +
//             '<SourceName>api_username</SourceName>' +
//             '<Password>api_password</Password>' +
//             '<SiteIDs>' +
//                '<int>site_id</int>' +
//             '</SiteIDs>' +
//          '</SourceCredentials>' +
//          '<XMLDetail>Full</XMLDetail>' +
//          '<PageSize>page_size</PageSize>' +
//          '<CurrentPageIndex>page_index</CurrentPageIndex>' +
//          '<ClientIDs>' +
//             '<string>client_id</string>' +
//          '</ClientIDs>' +
//          '<ClassIDs>' +
//             '<int>class_id</int>' +
//          '</ClassIDs>' +
//       '</Request>' +
//    '</AddClientsToClasses>' +
// '</soapenv:Body>' +
// '</soapenv:Envelope>'

var sr = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:_5="http://clients.mindbodyonline.com/api/0_5">' +
'<soapenv:Header/>' +
'<soapenv:Body>' +
   '<GetClients>' +
      '<Request>' +
         '<SourceCredentials>' +
            '<SourceName>Laboratoria</SourceName>' +
            '<Password>WQbt/ZB33HdcpqEVbabRVNgHLCE=<Password>' +
            '<SiteIDs>' +
               '<int>-99<int>' +
            '</SiteIDs>' +
         '</SourceCredentials>' +
         '<UserCredentials>' +
               '<Username>Siteowner</Username>' +
               '<Password>apitest1234</Password>' +
               '<SiteIDs>' +
                  '<int>-99</int>' +
               '</SiteIDs>' +
               '<LocationID>0</LocationID>' +
            '</UserCredentials>' +
            '<XMLDetail>Full</XMLDetail>' +
            '<PageSize>1500</PageSize>' +
            '<CurrentPageIndex>0</CurrentPageIndex>' +
            '<SearchText></SearchText>' +
      '</Request>' +
   '</GetClients>' +
'</soapenv:Body>' +
'</soapenv:Envelope>'

// var sr = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns="http://clients.mindbodyonline.com/api/0_5">' +
// '<soapenv:Header/>' +
// '<soapenv:Body>' +
//    '<AddOrUpdateClients>' +
//       '<Request>' +
//          '<SourceCredentials>' +
//             '<SourceName>Laboratoria</SourceName>' +
//             '<Password>WQbt/ZB33HdcpqEVbabRVNgHLCE=</Password>' +
//             '<SiteIDs>' +
//                '<int>-99</int>' +
//             '</SiteIDs>'
//          '</SourceCredentials>' +
//          '<XMLDetail>Full</XMLDetail>' +
//          '<PageSize>10</PageSize>' +
//          '<CurrentPageIndex>0</CurrentPageIndex>' +
//          '<UpdateAction>AddNew</UpdateAction>' +
//          '<Test>false</Test>' +
//          '<Clients>' +
//             '<Client>' +
//               '<ID>100015661</ID>' +
//                '<FirstName>Lucero</FirstName>' +
//                '<LastName>Hospina</LastName>' +
//                '<State>CA</State>' +
//                '<City>San Fransisco</City>' +
//                '<BirthDate>1996-10-05</BirthDate>' +
//             '</Client>' +
//          '</Clients>' +
//          '<SendEmail>false</SendEmail>' +
//       '</Request>' +
//    '</AddOrUpdateClients>' +
// '</soapenv:Body>' +
// '</soapenv:Envelope>' 

request.onreadystatechange = function() {
  if(request.readyState == 4) {
    if(request.status == 200) {
      console.log(request.responseText);
    }
  }
}

// Send the POST request
request.setRequestHeader('Content-Type', 'text/xml');
request.send(sr);

// request.onload = handleSuccess;
// request.onerror = handleError;
// request.send(sr);
};

// function handleSuccess() {
//   console.log('SUCCESS');
// }

// function handleError() {
//   console.log('ERROR');
// }

// testingApi();
