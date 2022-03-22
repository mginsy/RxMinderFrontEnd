#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>
#include <EEPROM.h>
#include <HX711_ADC.h>
#include "constants.h"

const int HX711_dout = 4;
const int HX711_sck = 5;

HX711_ADC LoadCell(HX711_dout, HX711_sck);

const int button = 14;

ESP8266WebServer server(80);

const char* ssid = "TRASH-SETUP";
const char* password = "";

void setup(void) {
  pinMode(button, INPUT);
  Serial.begin(115200);
  // check for stored credentials
  int addr = 0;
  // length of strings
//  int ssidLen = EEPROM.get(addr);
//  int passLen = EEPROM.get(addr);
//  
//
  WiFi.begin(DEBUG_WIFI_SSID, DEBUG_WIFI_PASS);
//   Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  WiFi.softAP(ssid, password);
  Serial.println("");
  Serial.print("IP Address: ");
  Serial.println(WiFi.softAPIP());
  
  if (MDNS.begin("esp8266")) {
    Serial.println("MDNS responder started");
  }
  
  server.on("/", HTTP_POST, handleRoot);
  
  server.onNotFound(handleNotFound);
  server.begin();
  
  Serial.println("HTTP server started");
  
  LoadCell.begin();
  unsigned long stabilizingtime = 2000; // preciscion right after power-up can be improved by adding a few seconds of stabilizing time
  boolean _tare = true; //set this to false if you don't want tare to be performed in the next step
  LoadCell.start(stabilizingtime, _tare);
  if (LoadCell.getTareTimeoutFlag() || LoadCell.getSignalTimeoutFlag()) {
    Serial.println("Timeout, check MCU>HX711 wiring and pin designations");
    while (1);
  }
  else {
    LoadCell.setCalFactor(1.0); // user set calibration value (float), initial value 1.0 may be used for this sketch
    Serial.println("Startup is complete");
  }
  while (!LoadCell.update());
  calibrate(LoadCell); //start calibration procedure
}

void loop(void) {
  if(WiFi.status() != WL_CONNECTED){
    server.handleClient();
    MDNS.update();
    return;
  }

  if(LoadCell.update()) {
    float data = LoadCell.getData(); 
    int buttonState = digitalRead(button);
    if(buttonState == HIGH) {
      Serial.println("button press");
      postJSON(data);
      delay(2000);
    }
  }
}
