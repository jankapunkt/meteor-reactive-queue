import { Tracker } from 'meteor/tracker'

/**
 * A reactive queue that works unidirectional:
 *
 * deps are on the retirieval side
 * changes only when enqueuing new data
 *
 * @class
 * @instanceName ReactiveQueue
 * @summary Constructor for a ReactiveSet, which represents a reactive Set.
 * @locus Client
 */
class ReactiveQueue {

  /**
   * Creates a new ReactiveQueue
   */
  constructor () {
    this.queue = []
    this.dep = new Tracker.Dependency()
  }

  isEmpty () {
    if (Tracker.active) {
      this.dep.depend()
    }
    return this.queue.length === 0
  }

  /**
   * Returns the head element without moving the queue
   * @return {*}
   */
  peek () {
    if (Tracker.active) {
      this.dep.depend()
    }

    return this.isEmpty()
      ? null
      : this.queue[this.queue.length - 1]
  }

  /**
   * Adds a new value to the tail of the queue.
   * @param value {*}
   */
  enqueue (value) {
    this.queue.push(value)
    this.dep.changed()
  }

  /**
   * Returns the head element of the queue.
   * @return {*}
   */
  dequeue () {
    if (Tracker.active) {
      this.dep.depend()
    }

    return this.isEmpty()
      ? undefined
      : this.queue.shift()
  }

  /**
   * Returns a shallow copy of the queue's underlying data as Array.
   * @return {Array}
   */
  all () {
    if (Tracker.active) {
      this.dep.depend()
    }
    return [].concat(this.queue)
  }

  release () {
    const data = this.all()
    this.queue.length = 0
    return data.reverse()
  }

  /**
   *
   */
  clear () {
    this.queue.length = 0
    this.dep.changed()
  }
}

export { ReactiveQueue }
