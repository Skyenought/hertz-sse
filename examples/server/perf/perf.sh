#!/bin/bash

rm *.out

go build -o perf_server main.go
echo "perf_server started"
nohup ./perf_server &
echo "pid of perf_server is $!"
sleep 1

echo "start to test"

echo " " >> result.txt
echo " ===================================== " >> result.txt
echo "    hertz version: $1" >> result.txt
echo " ===================================== " >> result.txt
wrk -H "Connection: keep-alive" --latency -c 512 -d 120 --timeout 8 -t 8 http://localhost:8888/sse >> result.txt

echo "finished testing"
