#!/bin/bash

curl -XPUT --header "Content-Type: application/json" --data @update-data.json localhost:8083/connectors/datasul-queue-kafka-v4/config