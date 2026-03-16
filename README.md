
# ESP-MQTT SSL application

# Procedure to modify for AWS IoT
1. change URI and replace with aws endpoint
2. embed certificates in cmake (private key/device cert/amaazon root cert)
3. client id should be same as thing name in AWS IoT thing created
4. modify client config to add certificates
5. In aws iot test client , subsribe to /topic/qos0  and publish "send binary please" to 
   /topic/qos0
6. subscribe to topic/binary in mqtt test client and binary is send there

# aws_esp32
1. Publish data to mqtt in json format
2. Make an EC2 instance and install influxdb and grafana (as in free tier aws plugins are not available)
3. Set up rules to access influxdb and grafana ports in EC2 instance settings(8086,3000)
4. Set up your influxdb account(bucket , token , organization)
5. Write AWS lambda function to send data from aws iot core to influx db database
6. Setup rule in aws iot core to send data from mqtt to lambda function.
7. Test if data shows in influxdb 
8. In grafana,set influxdb as data source and write query to visualize data in dashboard/table.


