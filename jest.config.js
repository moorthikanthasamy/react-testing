module.exports = {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js'],
    coverageDirectory: 'test/unit/reports/coverage',
    coverageReporters: ["lcov", "text"],
    reporters: ["default"]
}