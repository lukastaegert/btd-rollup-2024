# Rollup BTD

## Rollup Recharged: A Journey into Rust, WebAssembly, and High-Speed Bundling

The JavaScript ecosystem has long been known for its never-ending stream of new libraries and tools and for some time now, creating blazingly fast versions of existing tools seems to have been all the rage. As the maintainer of the bundler RollupJS, I could not stand by idly.
This is the story of how Rollup 4 came to have native binaries, what problems I was facing and how you, too, can make your code blazingly fast. Or at least a little faster. You will learn about tools and techniques, but in the end, this is also a glimpse at the hard reality of open source maintenance.

* Based on https://confluence.tngtech.com/pages/viewpage.action?pageId=762551406
* Using native binaries via rs-napi
* WebAssembly via wasm-pack
* Transferring data
    * https://msgpack.org
    * https://dev.doctorevidence.com/building-the-fastest-js-de-serializer-a413a2b4fb72

## Opener
(Who am I, What is my motivation, how do I feel about this?)
* Let’s talk about open source maintenance
* Who used Vite? And Rollup?
* Has anyone written their own JavaScript bundler?
* These days, a lot of people like to do that
  * Browserify, Webpack, Rollup, Vite, Snowpack, Parcel, esbuild, swc, Rolldown, farm, Rspack, Bun.build, Turbopack

* Who had ever submitted an issue to Vite or Rollup?
    * Show some obscure issues
    * Why are issues painful
        * Your baby is deformed
        * Would much rather build amazing new features than wade through bug fixes
* Who had ever submitted a pull request to Vite or Rollup?
    * Show some obscure PRs
* So why am I doing this in the first place
    * Here is a fun story if you want to become maintainer of a huge OSS project
* Resources are limited
    * Focus on code optimisation and plugin interface
* Where I got lucky: Vite chooses Rollup
* However a lot more pressure

What prompted me to go native?
* Performance number one issue in Vite
    * Show Vite issue, Rollup's days are numbered, pick this up in the end
* Many success stories around Rust based tools
* SWC exists as Rust-based parser
    * If you are only starting to explore a field, you know so little -> OXC, but mention later

Why Rust?
* Powerful memory management without garbage collection
* Innovative concurrency features
* All via ownership
    * Explain ownership via simple examples
    * Compare to read and write locks

How to add native code 1: Precompiled binaries
* What is a native file
    * .node
    * only via require
* rs-napi
* native entry + macro
* generated JS files and types
* async support

How to add native code 2: WebAssembly
* Show some Hello World for both
* Combine them with Rust workspaces

We do not want to go all the way
* Problem: Move AST to JavaScript
    * This is excruciatingly slow, Graphic what steps need to happen
    * Classic way via serde
    * There would have been better tools: Protocol buffers, message pack
    * I did not know about them, but built my own
    * Also, if I can control the format, I can eventually skip the conversion and directly operate on the buffer
* Message format
* Rust encoder
    * Rather fast with buffer.extend_from_slice
    * Able to standardize AST on Rust side
* JS decoder
    * Use arrays for fast property access
    * Generate objects in one go
* Use generated code

Asynchronous code
* WebWorkers are terribly slow
* Native threads are fast

How much did we gain?
Closing the circle
* I said that Rollup's days are numbered
* when PR was open, Evan You called me personally 

No performance gain:
https://github.com/rollup/rollup/issues/5182
