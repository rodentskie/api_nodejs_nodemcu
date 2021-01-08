
// for socket
#include <WebSocketsClient.h>
#include <SocketIoClient.h>

#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <SocketIOClient.h>

// declare global variables
SocketIOClient socket;

void setup() {
  Serial.begin(115200); // set baud rate

  // must connect to wifi first
  connectToWifi();

  // connect to server
  socket.begin("http://localhost", 554);
}

void loop() {
  // put your main code here, to run repeatedly:
  socket.emit("log", "\"this is a plain string\"");
  delay(2000);
}


void connectToWifi() {

  WiFi.begin("OnePiece", "dFGSJZ8476");
  Serial.print("Connecting");
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println();

  Serial.print("Connected, IP address: ");
  Serial.println(WiFi.localIP());
}
