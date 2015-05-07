Package.describe({
  name: 'art1sec8:nlp-compromise',
  version: '0.0.2',
  summary: 'natural language processing via nlp_compromise',
  git: 'https://github.com/Art1Sec8/nlp-compromise',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('nlp.js', ['server', 'client']);
  api.export('nlp');
});
