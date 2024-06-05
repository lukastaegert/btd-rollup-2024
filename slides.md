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

---
layout: section
sectionNumber: 2
---

# Rust

---

# Options for native code

## C/C++

* Great Node support, powerful
* Difficult memory management, easy to mess up

## Zig

* Used by bun
* Tooling support and ecosystem still lacking

## Go

* Used by esbuild
* Solid choice, JS interop likely not as mature

## Rust

* Great ecosystem for JS interop
* Innovative memory management via ownership

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

# Native Binaries

---
layout: section
sectionNumber: 4
---

# Web Assembly

---
layout: section
sectionNumber: 5
---

# Incremental Migration

## —the data transfer problem

---





