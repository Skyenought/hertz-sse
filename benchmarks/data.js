window.BENCHMARK_DATA = {
  "lastUpdate": 1700402710275,
  "repoUrl": "https://github.com/Skyenought/hertz-sse",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "skyenought@qq.com",
            "name": "Skyenought",
            "username": "Skyenought"
          },
          "committer": {
            "email": "skyenought@qq.com",
            "name": "Skyenought",
            "username": "Skyenought"
          },
          "distinct": true,
          "id": "bce8d3cc23cd92437362cd07aaf822d93e96d145",
          "message": "update benchmark.yml",
          "timestamp": "2023-11-19T22:04:15+08:00",
          "tree_id": "7e2b75340424cccfa86b7a45a9865b8550001dbc",
          "url": "https://github.com/Skyenought/hertz-sse/commit/bce8d3cc23cd92437362cd07aaf822d93e96d145"
        },
        "date": 1700402709784,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFullSSE",
            "value": 275.6,
            "unit": "ns/op\t      96 B/op\t       9 allocs/op",
            "extra": "4338198 times\n4 procs"
          },
          {
            "name": "BenchmarkNoRetrySSE",
            "value": 247.6,
            "unit": "ns/op\t      85 B/op\t       7 allocs/op",
            "extra": "4781288 times\n4 procs"
          },
          {
            "name": "BenchmarkSimpleSSE",
            "value": 186.9,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "6406281 times\n4 procs"
          }
        ]
      }
    ]
  }
}