module.exports = {
  name: 'pet-adoption-system',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/pet-adoption-system',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
