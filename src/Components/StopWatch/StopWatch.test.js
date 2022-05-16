import { act, fireEvent, render, screen } from '@testing-library/react';
import StopWatch from './StopWatch';

test('intial state is 0 seconds and we only have a start button', () => {
  // arrange
  render(<StopWatch />);

  // act

  // assert
  const startButton = screen.queryByText('Start');
  expect(startButton).toBeInTheDocument();

  const pauseButton = screen.queryByText('Pause');
  expect(pauseButton).not.toBeInTheDocument();

  const resetButton = screen.queryByText('reset');
  expect(resetButton).not.toBeInTheDocument();

  const minutes = screen.getByTestId('timer-min');
  const seconds = screen.getByTestId('timer-sec');
  const milli = screen.getByTestId('timer-mil');

  expect(minutes.innerHTML).toEqual('00:');
  expect(seconds.innerHTML).toEqual('00.');
  expect(milli.innerHTML).toEqual('00');
});

test('after started, shows reset and pause buttons', () => {
  // arrange
  render(<StopWatch />);
  const startButton = screen.getByText('Start');

  // act
  fireEvent.click(startButton);

  // assert
  expect(startButton).not.toBeInTheDocument();

  const pauseButton = screen.queryByText('Pause');
  expect(pauseButton).toBeInTheDocument();

  const resetButton = screen.queryByText('reset');
  expect(resetButton).toBeInTheDocument();
});

test('after started, timer increments', () => {
  // arrange
  render(<StopWatch />);
  const startButton = screen.getByText('Start');
  jest.useFakeTimers();
  fireEvent.click(startButton);
  
  // act
  act(() => {
    jest.advanceTimersByTime(((1 * 60) + 2) * 1000 + 30);
  });

  jest.useRealTimers();

  // assert
  const minutes = screen.getByTestId('timer-min');
  const seconds = screen.getByTestId('timer-sec');
  const milli = screen.getByTestId('timer-mil');

  expect(minutes.innerHTML).toEqual('01:');
  expect(seconds.innerHTML).toEqual('02.');
  expect(milli.innerHTML).toEqual('03');
});
