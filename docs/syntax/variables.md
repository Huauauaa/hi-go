# 变量定义

Go 中常见的变量定义方式有 `var` 声明和短变量声明 `:=`。

## 使用 var 声明

`var` 可以显式指定变量类型：

```go
var name string = "Go"
var age int = 15
```

如果初始值能推断出类型，也可以省略类型：

```go
var name = "Go"
var age = 15
```

还可以一次声明多个变量：

```go
var (
	name = "Go"
	age  = 15
)
```

## 使用短变量声明

在函数内部，可以使用 `:=` 声明并初始化变量：

```go
func main() {
	name := "Go"
	age := 15

	fmt.Println(name, age)
}
```

短变量声明只能在函数内部使用，不能用于包级变量。

## 零值

声明变量但没有显式赋值时，变量会使用对应类型的零值：

```go
var count int
var title string
var enabled bool
```

常见零值包括：

- `int` 的零值是 `0`
- `string` 的零值是空字符串 `""`
- `bool` 的零值是 `false`
- 指针、切片、map、函数、接口、channel 的零值是 `nil`
