package main

// #region new-name
func newName() *string {
	name := "Go"
	return &name
}

// #endregion new-name

func main() {
	_ = newName()
}
