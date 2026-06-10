# hi-go

A pnpm + VitePress documentation site with a small Go hello world example.

## Requirements

- Node.js 20 or newer
- pnpm
- Go 1.22 or newer

## Development

Install dependencies:

```bash
pnpm install
```

Start the VitePress dev server:

```bash
pnpm docs:dev
```

Build the documentation site:

```bash
pnpm docs:build
```

Run the Go hello world example:

```bash
go run ./examples/hello-world
```
