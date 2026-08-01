# Sensor Simulator
import time, random, json

def stream_telemetry():
    while True:
        data = {
            "sensor_id": "TEMP-01",
            "temperature": round(random.uniform(2.0, 8.0), 2),
            "timestamp": time.time()
        }
        print(f"[SENSOR] {json.dumps(data)}")
        time.sleep(5)

if __name__ == "__main__":
    stream_telemetry()
