module.exports = {
  // Allow Tailwind directives and common utility at-rules
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer']
    }]
  }
};
