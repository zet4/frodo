package actions

import (
	"strconv"

	"github.com/gobuffalo/buffalo"
)

type Book struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

var books = []Book{
	{1, "Hello world!"},
	{2, "This is just a prototype!"},
	{3, "But sure why not add some more books..."},
	{4, "I am really running out of ideas here, lol."},
}

// BooksList default implementation.
func BooksList(c buffalo.Context) error {
	return c.Render(200, r.JSON(books))
}

// BooksList default implementation.
func BooksGet(c buffalo.Context) error {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		return err
	}

	return c.Render(200, r.JSON(Book{
		id, "This is just a placeholder one! But here's an ID: " + c.Param("id"),
	}))
}
