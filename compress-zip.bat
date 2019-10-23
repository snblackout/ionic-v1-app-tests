@ECHO OFF

del compressed-app2.zip /f /q

"C:\Program Files\7-Zip\7z" a "compressed-app2.zip" "www"
"C:\Program Files\7-Zip\7z" a "compressed-app2.zip" "resources"
"C:\Program Files\7-Zip\7z" a "compressed-app2.zip" "config.xml"
"C:\Program Files\7-Zip\7z" a "compressed-app2.zip" "google-services.json"