Package.describe({
  summary: 'format old JavaScript dates in a �pretty� way. ex : 2 hours ago , 3 minutes ago.'
})

Package.on_use(function (api) {
  if (api.export) api.export('PrettyDate')
  api.add_files('lib/index.js', ['client', 'server'])
})
