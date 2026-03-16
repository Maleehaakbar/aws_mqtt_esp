//lambda function to send data from aws iot core (mqtt) to influxdb database on ec2 instance ubuntu

import http from "http";

export const handler = async (event) => {

    console.log("Received event:", JSON.stringify(event));

    const ax = event.ax || 0;
    const ay = event.ay || 0;
    const az = event.az || 0;

    const gx = event.gx || 0;
    const gy = event.gy || 0;
    const gz = event.gz || 0;

    const t = event.t || 0;

    const data = `mpu6050 ax=${ax},ay=${ay},az=${az},gx=${gx},gy=${gy},gz=${gz},t=${t}`;
    const token = process.env.INFLUX_TOKEN;

    const options = {
        hostname: "13.201.116.217",
        port: 8086,
        path: "/api/v2/write?bucket=mpudatabase&org=smartends&precision=s",
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
            "Content-Length": data.length,
            "Authorization": `Token ${token}`,
        }
    };

    const req = http.request(options, res => {
        console.log("Status:", res.statusCode);
    });

    req.write(data);
    req.end();

    return {
        statusCode: 200,
        body: "Data sent to InfluxDB"
    };
};