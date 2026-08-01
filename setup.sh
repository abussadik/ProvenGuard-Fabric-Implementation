#!/bin/bash
set -e
echo "Starting ProvenGuard-Fabric complete setup..."
./scripts/01-network-setup.sh
./scripts/02-deploy-chaincode.sh
./scripts/03-setup-api-web.sh
echo "Setup complete!"
