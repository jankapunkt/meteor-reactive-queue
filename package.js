Package.describe({
  name: 'jkuester:reactive-queue',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Simple and lightweight reactive queue implementation',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:jankapunkt/meteor-reactive-queue.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom(['1.6', '2.4'])
  api.use([
    'ecmascript',
    'tracker'
  ])
  api.mainModule('reactive-queue.js')
})
