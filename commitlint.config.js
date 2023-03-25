module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'hotfix', 'docs', 'improvement', 'refactor']],
    'header-max-length': [2, 'always', 100],
  },
};
