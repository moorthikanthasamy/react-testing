import sum from "../../src/components/Math";

test('2 + 3 = 5', () => {
    expect(sum(2, 3)).toBe(5);
});