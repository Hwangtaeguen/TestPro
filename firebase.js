// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //앱에만 접속
import { initializeFirestore } from "firebase/firestore" //파이어베이스접속

// Your web app's Firebase configuration
const firebaseConfig = {
    type: "service_account",
    project_id: "testproject-73959",
    private_key_id: "d2a191d70a7bd94ce811ecf77b7eb8b5b60e7f46",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCYeX7QBUCCGqkB\nc6JofmBPfUzpFpT48SOqCb0+V4RIn02rF5YaTi8We/UDjwWZoSAmJJLJof5ZXCZz\ngRPk94aSk8jx/fXLjvX72dKjhtbaXdCPCyf+r/bUI5Ybvz97T1Y0h8auZ4dtgYXS\nKj0UKMg4UVNE++4/x6MRCsIOtaC8iPoaQ50f+VD/0HsMjRo4BpIOiKzdXySOXefv\n8EWxBQ+eR79zM+nJO+92bDRWp6/iqM/y7fQNVVCcYnKt7CbVqYii3O2Tb38O+37Y\nTQrGgnk4FuVLoFrehI3Gn6oS9HKxsGHkhnZkcy7+M9DcFqslh0gLl7Dkha6wK3Hu\nfT2E4waxAgMBAAECggEAAs+zrEF6iOOVs+iGSTOyUiji6QXQ8Z2dnRognoSF1IJ2\nb8YHrxy7rsgSkpIZpfVj9rwUJkpZuptRvK23uJAtT6jQqtCWTn5ob/A6W2hGMCDM\ncoS/xCkJravpzcFrGdqSwfVybv8K7tSVa3R6q5NcbLhoJwSXph6n1a27egK0j+FV\n4TFeZ9kjvcim+5Du50IifVPnvuAypTyTg3XNTW9snYIUfUtF6nAsHrct5rBuCfAt\n+m2wk2jiATmvk63jSHgLVW0Zc7uP/I8xX1+rBWwp7S7wsu+ooAnW2O2H8x7naz4l\nqHsn6vnaBYWVS51Nj0YWNnwW/u2pfa636lhWXYiGAQKBgQDSuCT8CUuBhcfNkkC0\nfC6P6Urrjwi4XYulFk22xar/Sp4n0W6rddGCMP40vIZA/0lVq3vRj3wFKi2sETw0\n49riTDQI9JyEWAfZNe5XKr1BHldY9mzeDIeyzE2W27iuQF2jjjpGTeL7LTtpPmwL\njCya//Wzd/t+pYO2aXfQnVsDsQKBgQC5PUHbEHj8l2y/wcOmz+HpvLaTgyeEzmTx\nrPI9ThTABY14F5yuiaHC9rcXEP2ODwxXpPh56eCEEV/nWIEG+ZpdCwPpFBUp/EUK\nRxQSUJoqSG/+wrUM3cDRmYCTntyHvd5FV0OMuFz8rnE6KFuJycjy/s3tbNL6E/xE\nrp+jODfzAQKBgQCGmqrFdQqOim6/mpVKtajotRXus0fWvareogiyoEJDId81gEs5\nq+FRUQqRlXwNOQYXe5t0mjuW8QKLz9at0n+X3yW+MsNopvMchZ7if6K1XjRd18xj\na42jYW6O13x5kxQ9zjTbhBVibdptuDo8hiZYPPku044LsJ8afvTShjIFgQKBgELe\ndCmKdsJoP1+xqNlM7facoyP5EokEoLgFgKTUzPTMjFcv3uW61WQ1/74Z6g4gLIpv\nCSupW90REJfJATrtW+X+lfjLwSAY6ytcoUhDRIPDBnrm+sicPIDtctbXYDC4P8a0\nS7Q+0YJ9zm36J6FD8ICXrurof/i6wjRg/UvEfZ4BAoGBALZaXAKEPXTUxPi/Fy+L\n8VLssK2Maqrst93p/OD+ZMofnnaZmssAZDpWc7Owyy/TD26WzPattKfL+qdMsInB\nFinE2ouA2INw+lO7mSq4X40N4juvUukjqFCdfM9ydAoOQqVLSzXzp4sTrormmagm\nNGezKHPOo2YjMY04SyAISWLv\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-qmkil@testproject-73959.iam.gserviceaccount.com",
    client_id: "115025526538813479587",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qmkil%40testproject-73959.iam.gserviceaccount.com"
};

// Initialize Firebase 앱에 접속
const app = initializeApp(firebaseConfig);
//데이터베이스에 접속
const db = initializeFirestore(app,{
    exporimentalForceLongPolling: true,
})
export {db} //이거사용해서 삭제, 업데이트 등..