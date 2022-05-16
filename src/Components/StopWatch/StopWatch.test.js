import StopWatch from './StopWatch';

test('intial state is 0 seconds and we only have a start button', () => {
  // arrange

  // act

  // assert
  expect(timer.innerHTML).toEqual('00:00.00');
  expect(startButton).toBeInTheDocument();
  expect(pauseButton).not.toBeInTheDocument();
  expect(resetButton).not.toBeInTheDocument();
});
