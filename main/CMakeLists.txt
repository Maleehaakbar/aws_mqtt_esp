idf_component_register(SRCS "mpu6050_test.c" "app_main.c"
                    PRIV_REQUIRES mqtt esp_partition nvs_flash esp_netif app_update
                    INCLUDE_DIRS ".")
