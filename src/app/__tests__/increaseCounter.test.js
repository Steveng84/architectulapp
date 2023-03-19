import ViewModel from "../features/profile/ViewModel";

test("increaseCounter", () => {
  const { CounterHandler } = ViewModel();

  expect(CounterHandler(1)).toBe(0);
});

test("increaseCounter", () => {
  const { counter, IncreaseCounter } = ViewModel();

  expect(IncreaseCounter()).toBe(counter === 11);
});
