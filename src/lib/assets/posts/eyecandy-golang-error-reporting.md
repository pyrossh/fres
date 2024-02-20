---
layout: ../../../layouts/post.astro
title: Eyecandy golang error reporting
description: Better error messages logging in golang
image: ../../../assets/images/terminal1.png
date: September 17, 2016
tags:
  - golang
  - error
  - formatting
---

We at playlyfe wanted to get an email report as soon as an error occurred on our production servers. Since golang does not have
stack traces with its inbuilt error mechanism we had to find a quick and simple solution which wouldn’t require too much refactoring
of our existing codebase. So this is how we went about accomplishing this task. First we decided to wrap our errors so that we can
get the runtime stack whenever an error occurs.

We first started using this, https://github.com/go-errors/errors
but soon found out that it wasn’t exactly suited for our use case. So we created this minimalistic and easy approach to wrap all our
existing errors. First we decided to wrap our errors so that we can get the runtime stack whenever an error occurs.

```go
package utils

import (
    "bytes"
    "database/sql"
    "runtime"
)

type WrappedError struct {
    Err error
    StackTrace string
}

func(e * WrappedError) Error() string {
    return e.Err.Error()
}

func E(e error) error {
    switch e.(type) {
    case *WrappedError:
        return e
    case nil:
        return nil
    default:
        stackTrace := make([]byte , 1 << 16)
        runtime.Stack(stackTrace, false)
        buffer := &bytes.Buffer{}
        for _ , a := range stackTrace {
            if a != 0 {
                buffer.WriteByte(a)
            }
        }
        return &WrappedError {
            Err: e,
            StackTrace: buffer.String(),
        }
    }
}
```

But then just sending the error stack in plain format to our emails wasn’t going to be nice to read at all. We needed more
information like context and session information and things like that. On top of that I also wanted to make our stack traces
prettier so that it would easier to figure out where the error started from.

So to parse the error stack trace I found this cool library which does that for and on top of that it also themes it very well
https://github.com/maruel/panicparse

But then it didn’t properly expose an API to do it properly and after a few dabblings here,
https://github.com/maruel/panicparse/issues/8
with the developer and +1’s we got a proper api which I could use.
And now I haz got a prettier stack traces like this,

![Terminal 1](../../../assets/images/terminal1.png)

So great I got ANSI coloring setup and the errors look great in our console but what about our
mails. Of course this wasn’t going to work since emails primarily render text and HTML only, and
ANSI color codes was going to make our messages a mess.

So then I went about digging github for an ANSI terminal codes to HTML converter so that it would
look exactly like this in my mail. And then I found this cool go library which does that,
https://github.com/buildkite/terminal

Now all emails require inline CSS or else they wouldn’t work so then I had to find out a way to do that too.
And this was it,
https://github.com/aymerick/douceur

Finally after messing around with so many libraries I got around to getting it to work and this is how it looks in my email,

![Email 1](../../../assets/images/email1.png)
