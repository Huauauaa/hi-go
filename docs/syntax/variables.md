# 变量定义

Go 中常见的变量定义方式有 `var` 声明和短变量声明 `:=`。

## 使用 var 声明

`var` 可以显式指定变量类型：

<<< ../../examples/syntax/variables/main.go#explicit-var

如果初始值能推断出类型，也可以省略类型：

<<< ../../examples/syntax/variables/main.go#inferred-var

还可以一次声明多个变量：

<<< ../../examples/syntax/variables/main.go#grouped-var

## 使用短变量声明

在函数内部，可以使用 `:=` 声明并初始化变量：

<<< ../../examples/syntax/variables/main.go#short-declaration

短变量声明只能在函数内部使用，不能用于包级变量。

## 零值

声明变量但没有显式赋值时，变量会使用对应类型的零值：

<<< ../../examples/syntax/variables/main.go#zero-values

常见零值包括：

- `int` 的零值是 `0`
- `string` 的零值是空字符串 `""`
- `bool` 的零值是 `false`
- 指针、切片、map、函数、接口、channel 的零值是 `nil`
