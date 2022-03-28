# Meteor reactive queue

[![built with Meteor](https://img.shields.io/badge/Meteor-package-green?logo=meteor&logoColor=white)](https://meteor.com)
[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![GitHub](https://img.shields.io/github/license/jankapunkt/meteor-reactive-queue)

This is a simple and lightweight package (< 100 lines) that provides a reactive
queue implementation to work with Meteor's Tracker.

## Installation

```bash
$ meteor add jkuester:reactive-queue
```

## Usage

```javascript
import { ReactiveQueue } from 'meteor/jkuester:reactive-queue'

const queue = new ReactiveQueue()

// this will automatically run when a new value
// is added to the queue
Tracker.autorun(() => {
  const num = queue.dequeue()
  console.debug(num)
})

// fast enqueue some numbers
Meteor.setInterval(() => queue.add(Math.random()), 25)
```

## How it works

The queue registers any dependency changes when enqueue is called, which allows
to peek (check the first element but not remove it) or dequeue reactively, once
new data flows in.

## License

MIT, see [LICENSE file](./LICENSE)
