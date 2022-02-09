import { PlantTypePipe } from "./plant-type.pipe";

describe('TitleCasePipe', () => {
  const pipe = new PlantTypePipe();

  const testCases = [
    { value: "outside", expected: "Roślina zewnętrzna" },
    { value: "inside", expected: "Roślina wewnętrzna" },
    { value: "asdasdasd", expected: "-" },
    { value: "", expected: "-" },
    { value: undefined, expected: "-" },
  ];

  testCases.forEach(testCase => {
    it(`transforms "${testCase.value}" to "${testCase.expected}"`, () => {
      expect(pipe.transform(testCase.value as any)).toBe(testCase.expected);
    });
  })
});
