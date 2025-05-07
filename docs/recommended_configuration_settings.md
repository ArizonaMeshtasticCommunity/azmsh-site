# 📡 Recommended Settings

To help maintain a healthy and reliable mesh network across Arizona, we suggest the following configuration settings for your Meshtastic devices.

These recommendations are based on real-world use and shared experiences within the Arizona Meshtastic community. They’re designed to promote mesh stability and will likely evolve as our network grows.

---

## 🔧 Radio Settings

### 📱 Device Settings

| Setting | Recommended Value | Details |
|--------:|:------------------|:--------|
| **Role** | `CLIENT` or `CLIENT_MUTE` | For most nodes. See [Deployment Scenarios](https://www.youtube.com/watch?v=htjwtnjQkkE) on YouTube. |
| **NodeInfo broadcast interval** | `10800` seconds (3 hours) | Keeps the mesh updated with node info without excess traffic. |

### 📍 Position Settings

| Setting | Recommended Value | Notes |
|--------:|:------------------|:------|
| **Smart position enabled** | `True` | Helps devices determine when they’ve moved. |
| **Position broadcast interval** | `3600` seconds (1 hour) | For mobile nodes. Disable for fixed installations. |
| **GPS update interval** | `1800` seconds (30 minutes) | Regular GPS refresh for mobile devices. |
| **Position flags** | Disable unused flags | Fixed nodes should turn off most position-related flags. |

### 📶 LoRa Settings

| Setting | Recommended Value | Notes |
|--------:|:------------------|:------|
| **Hop limit** | `5` | Please avoid setting higher than `6` to reduce network congestion. |
| **Ignore MQTT** | `True` | Ensures nodes don’t rely on cloud-based data relays. |
| **OK to MQTT** | `True` | (Firmware v2.5.0+) Allows your node to appear on [view.azmsh.net](https://view.azmsh.net). |

---

## ⚙️ Module Settings

### 📊 Telemetry

| Setting | Recommended Value | Notes |
|--------:|:------------------|:------|
| **Device metrics update interval** | `3600` seconds (1 hour) | Consider `1800` (30 min) when testing or monitoring new devices. |
| **Environment metrics update interval** | `3600` seconds (1 hour) | Disable if you’re not using environmental sensors. |
| **Power metrics module** | `False` | For advanced setups with I²C sensors—usually not needed. |

> ℹ️ *If you don’t use temperature, air quality, or similar sensors, it’s best to turn off the corresponding modules to reduce bandwidth usage.*

### 🤝 Neighbor Info

| Setting | Recommended Value | Notes |
|--------:|:------------------|:------|
| **Neighbor Info enabled** | `True` | Enables your node to keep track of nearby devices. |
| **Update interval** | `14400` seconds (4 hours) | Plenty for casual monitoring. |
| **Transmit over LoRa** | `True` | Share info with nearby nodes via radio. |

---

## 🛠️ Apply Settings Using Meshtastic CLI
If you haven’t installed the CLI yet, follow the official instructions here:  
🔗 [Meshtastic CLI Installation Guide](https://meshtastic.org/docs/software/python/cli/installation/)
# Device Settings
```
meshtastic \

  --set device.role CLIENT \

  --set device.node_info_broadcast_secs 10800
```
# Position Settings
```
meshtastic \

  --set position.position_broadcast_smart_enabled true \

  --set position.position_broadcast_secs 3600 \

  --set position.gps_update_interval 1800

  --pos-fields ALTITUDE ALTITUDE_MSL HEADING SPEED
```
# LoRa Settings
```
meshtastic \

  --set lora.hop_limit 5 \

  --set lora.ignore_mqtt true \

  --set lora.config_ok_to_mqtt true
```
# Telemetry Module
```
meshtastic \

  --set telemetry.device_update_interval 3600 \

  --set telemetry.environment_update_interval 3600 \

  --set telemetry.power_measurement_enabled false \

  --set telemetry.environment_measurement_enabled false \

  --set telemetry.air_quality_enabled false
```
# Neighbor Info Module
```
meshtastic \

  --set neighbor_info.enabled true \

  --set neighbor_info.update_interval 14400 \

  --set neighbor_info.transmit_over_lora true
```
