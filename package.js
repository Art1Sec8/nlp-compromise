Package.describe({
  name: 'art1sec8:nlp-compromise',
  version: '0.0.1',
  summary: 'natural language processing via nlp_compromise',
  git: 'https://github.com/Art1Sec8/nlp-compromise',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('nlp-compromise.js', ['server', 'client']);
  api.export('nlp');
});

Npm.depends({
  'nlp_compromise': '0.4.0'
});
