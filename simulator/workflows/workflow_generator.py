# Workflow Generator
import random, json

def generate_workflow(batch_id):
    steps = ["SLAUGHTER", "PROCESSING", "PACKAGING", "DISPATCH"]
    return { "batchId": batch_id, "workflow": steps }

if __name__ == "__main__":
    print(generate_workflow("BATCH-99"))
