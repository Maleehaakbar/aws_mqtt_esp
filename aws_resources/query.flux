from(bucket: "mpudatabase")
  |> range(start: -10m)
  |> filter(fn: (r) => r._measurement == "mpu6050")
  |> filter(fn: (r) => r._field == "ax")
  |> aggregateWindow(every: 10s, fn: mean)

  
  OR
  
 filter(fn: (r) => r._measurement == "mpu6050" and r._field =~ /^(ax|ay|az|gx|gy|gz|t)$/)