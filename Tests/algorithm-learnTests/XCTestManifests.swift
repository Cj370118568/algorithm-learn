import XCTest

#if !canImport(ObjectiveC)
public func allTests() -> [XCTestCaseEntry] {
    return [
        testCase(algorithm_learnTests.allTests),
    ]
}
#endif
