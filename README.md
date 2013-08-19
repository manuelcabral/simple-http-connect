# simple-http-connect

There are a few simple HTTP servers for node, such as [http-server](http-server) and [simple-http-server](https://github.com/andrewpthorp/simple-http-server). However I missed some features while using them, such folder lists and MIME types.

This module is a tiny wrapper of [connect's](http://www.senchalabs.org/connect/) static() and directory() middleware, which handles these things quite well.

## Installing

    npm install -g simple-http-connect

## Usage

    simple-http-connect [-p <port>] [-d <dir>]
