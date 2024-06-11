---
theme: "@tngtech/slidev-theme-tng"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
themeConfig:
  authors:
    - name: Lukas Taegert-Atkinson
      email: lukas.taegert-atkinson@tngtech.com
hideInToc: true
layout: intro
css: unocss
transition: slide-left
favicon: /node_modules/@tngtech/slidev-theme-tng/assets/img/favicon.svg
---

# Rollup Reloaded

## A Journey into Rust, WebAssembly, and High-Speed Bundling

---
layout: section
sectionNumber: 1
---

# Open Source

<!--
Who is using Rollup? Who is using Vite? And who is maintaining their own JavaScript bundler?
-->

---

# JavaScript Bundlers

<v-click>

(a small selection)

</v-click>
<v-click>

Browserify, Webpack, Rollup, Vite, Snowpack, Parcel, esbuild, swc, Rolldown, farm, Rspack, Bun.build, Turbopack

</v-click>

<span v-mark="{ at: 1, color: '#234', type: 'circle' }">
Important text
</span>

---
layout: section
sectionNumber: 2
---

# Rust

---

# Options for native code

<v-click>

## C/C++

* Great Node support, powerful
* Difficult memory management, easy to mess up

</v-click>
<v-click>

## Zig

* Used by bun
* Tooling support and ecosystem still lacking

</v-click>
<v-click>

## Go

* Used by esbuild
* Solid choice, JS interop likely not as mature

</v-click>
<v-click>

## Rust

* Great ecosystem for JS interop
* Innovative memory management via ownership

</v-click>

---

# Ownership

```rust {1-3|6|1-3,7|8|9|6-7,10|all}
struct Container {
    data: String
}

fn main() {
    let hello = String::from("Hello");
    let mut container = Container { data: hello };
    container.data.push_str(" World");
    println!("{}", container.data);
    println!("{}", hello); // ❌ value has been "moved" to "container"
}
```

<v-clicks>

* Every value is "owned" by a variable binding.
* Ownership is transferred on assignment or function call.
* Memory is freed when the owner goes out of scope.

</v-clicks>

---

# Borrowing

```rust {1-3|6|1-3,7-8|9|10-11|12|all}
struct Container<'a> {
    data: &'a mut String,
}

fn main() {
    let mut hello = String::from("Hello");
    // begin borrow/lifetime a
    let container = Container { data: &mut hello };
    container.data.push_str(" World");
    println!("{}", container.data);
    // end borrow/lifetime a after last use
    println!("{}", hello); // cannot happen before last container usage
}
```

<v-clicks>

* Values can be "borrowed" via references (= pointers)
* References have lifetimes controlled by their usage
* At most one mutable reference at a time, or multiple immutable ones
* Avoids data races

</v-clicks>

---
layout: statement
---

Rust is great for performant, safe, and concurrent software.

---
layout: section
sectionNumber: 3
---

# Native Binaries in Node

---

# Native Node Modules

<v-clicks>

* `.node` files (actually a renamed `.so`, `.dylib` or `.dll` depending on OS)
* Only usable via `require`
* Traditionally created via `node-gyp` from C++, recompiled for every Node version
* Since Node 8: Node-API (N-API) as stable interface
  * Binaries work across Node versions
  * Need to match OS and CPU architecture

</v-clicks>

---

# Abstracting the interface away<br>with NAPI-RS

<div style="display:flex;flex-direction: row;gap: 20px;">
<img src="/img/napi-rs.png" alt="NAPI-RS Logo" style="width:100px;height:100px;"/>
<div>

Powerful macros and types to generate the JavaScript interface

```rust {all|5-8}
use napi::bindgen_prelude::Buffer;
use napi_derive::napi;
use parse_ast::parse_ast;

#[napi]
pub fn parse(code: String, allow_return_outside_function: bool) -> Buffer {
  parse_ast(code, allow_return_outside_function).into()
}
```

<v-click>

Auto-generated types

```typescript
export function parse(code: string, allowReturnOutsideFunction: boolean): Buffer
```

</v-click>

</div>
</div>

<v-click>

Similar to `node-bindgen`, but more efficient generated code and powerful tooling.

</v-click>

---

# How to publish across platforms

Set up by NAPI-RS CLI tool

<v-clicks>

* separate packages for every target
  ```
  @rollup/rollup-win32-x64-msvc
  @rollup/rollup-darwin-arm64
  ...
  ```
  * contain only `.node` file as entry point
  * list `os` and `cpu` in their `package.json` file
* `rollup` package has __all__ platform packages as `optionalDependencies`
  * Node only installs suitable packages
* NAPI-RS scaffolds GitHub Actions to build for many platforms
  * Rollup supports 16 targets: 3 Windows, 2 Mac, 2 Android, 9 Linux

</v-clicks>

---
layout: statement
---

What about browser targets?

---

# WebAssembly

* Portable binary format
* Supported in all modern browsers and NodeJS >= 8
* Some parsing overhead

<v-click>

## One-stop solution: wasm-pack

</v-click>

<div style="display:flex;flex-direction: row;gap: 20px;">
<img v-after src="/img/wasm-ferris.png" alt="NAPI-RS Logo" style="width:160px;height:100px;"/>
<div>

<v-click>

Very similar to NAPI-RS

```rust
use parse_ast::parse_ast;
use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub fn parse(code: String, allow_return_outside_function: bool) -> Vec<u8> {
  parse_ast(code, allow_return_outside_function)
}
```

</v-click>
<v-clicks>

* Includes TypeScript type generation
* For both Node and browser targets

</v-clicks>

</div>
</div>

---
layout: section
sectionNumber: 4
---

# Incremental Migration

## —the data transfer problem

---





