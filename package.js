Package.describe({
  summary: "format old JavaScript dates in a “pretty” way. ex : 2 hours ago , 3 minutes ago."
});

Package.on_use(function (api) {
  api.use('prettydate', ['client', 'server']);
  if (api.export) api.export('PrettyDate');
  api.add_files('index.js', ['client', 'server']);
});
