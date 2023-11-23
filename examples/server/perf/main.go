package main

import (
	"context"
	"github.com/cloudwego/hertz/pkg/app"
	"github.com/cloudwego/hertz/pkg/app/server"
	"github.com/hertz-contrib/sse"
	"net/http"
	"time"
)

func main() {
	h := server.Default()

	h.GET("/sse", func(ctx context.Context, c *app.RequestContext) {
		c.SetStatusCode(http.StatusOK)
		s := sse.NewStream(c)
		for i := 0; i < 10; i++ {
			event := &sse.Event{
				Event: "timestamp",
				Data:  []byte(time.Now().Format(time.RFC3339)),
			}
			s.Publish(event)
		}
	})

	h.Spin()
}
