package grifts

import (
	"github.com/gobuffalo/buffalo"
	"github.com/zet4/frodo/actions"
)

func init() {
	buffalo.Grifts(actions.App())
}
