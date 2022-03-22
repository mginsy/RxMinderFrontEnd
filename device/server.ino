// takes in urlencoded request object
void handleRoot() {
  if(!server.hasArg("ssid") || !server.hasArg("password")
      || server.arg("ssid") == NULL || server.arg("password") == NULL) {
    server.send(400, "text/plain", "Bad Request");
  }
  // connect to network
  String targetSSID = server.arg("ssid");
  String targetPass = server.arg("password");
  WiFi.begin(targetSSID, targetPass);
  int connection = 0;
  for(int i=0;i<10;++i) {
    if(WiFi.status() == WL_CONNECTED){
      connection = 1;
      break;
    }
    delay(1000);
    Serial.print(".");
  }
  if(!connection) {
    Serial.println("failed...");
    server.send(401, "text/plain", "invalid credentials");
    return;
  }
  
  Serial.println("connected!");
  // store credentials in EEPROM
  server.send(200, "text/plain", "connected");
  delay(500);
  // turn off AP
  WiFi.softAPdisconnect(true);
  server.stop();
}

void handleNotFound() {
  String message = "File Not Found\n\n";
  message += "URI: ";
  message += server.uri();
  message += "\nMethod: ";
  message += (server.method() == HTTP_GET) ? "GET" : "POST";
  message += "\nArguments: ";
  message += server.args();
  message += "\n";
  for (uint8_t i = 0; i < server.args(); i++) {
    message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
  }
  server.send(404, "text/plain", message);
}
