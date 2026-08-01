# ProvenGuard-Fabric Orchestration & Build Automation Makefile

.PHONY: all setup network chaincode api test clean help security

SHELL := /bin/bash
PYTHON := python3
DOCKER_COMPOSE := docker-compose -f docker-compose.prod.yml

all: help

help:
	@echo "ProvenGuard-Fabric Automation Tasks:"
	@echo "  make setup        - Run full system setup and initialisation"
	@echo "  make network      - Start Hyperledger Fabric 3-org network"
	@echo "  make chaincode    - Deploy chaincode (halalchain)"
	@echo "  make api          - Start REST API server"
	@echo "  make test         - Run end-to-end test suite"
	@echo "  make security     - Execute vulnerability and attack simulation harness"
	@echo "  make clean        - Stop containers and purge generated evidence"

setup:
	@chmod +x setup.sh
	@./setup.sh

network:
	@chmod +x scripts/01-network-setup.sh
	@./scripts/01-network-setup.sh

chaincode:
	@chmod +x scripts/02-deploy-chaincode.sh
	@./scripts/02-deploy-chaincode.sh

api:
	@chmod +x scripts/03-setup-api-web.sh
	@./scripts/03-setup-api-web.sh

test:
	@pytest tests/ -v --tb=short

security:
	@$(PYTHON) adversarial/attacks/injection_harness.py

clean:
	@chmod +x scripts/99-cleanup.sh
	@./scripts/99-cleanup.sh || true
	@rm -f api.pid setup_output.txt
