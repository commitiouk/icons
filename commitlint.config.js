module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'type-enum': [2, 'always', ['chore', 'feat', 'fix', 'docs', 'perf', 'ci', 'refactor']],
    'scope-empty': [2, 'never'],
  },
};
