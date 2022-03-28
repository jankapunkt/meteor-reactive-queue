# Meteor reactive queue

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
