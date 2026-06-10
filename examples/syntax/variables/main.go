package main

import "fmt"

func explicitVar() {
	// #region explicit-var
	var name string = "Go"
	var age int = 15
	// #endregion explicit-var

	_, _ = name, age
}

func inferredVar() {
	// #region inferred-var
	var name = "Go"
	var age = 15
	// #endregion inferred-var

	_, _ = name, age
}

func groupedVar() {
	// #region grouped-var
	var (
		name = "Go"
		age  = 15
	)
	// #endregion grouped-var

	_, _ = name, age
}

func zeroValues() {
	// #region zero-values
	var count int
	var title string
	var enabled bool
	// #endregion zero-values

	_, _, _ = count, title, enabled
}

// #region short-declaration
func main() {
	name := "Go"
	age := 15

	fmt.Println(name, age)
}

// #endregion short-declaration
