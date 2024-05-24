import { Button, Stack, Text } from "@chakra-ui/react";

type Props = {
  start: boolean;
  minutes: number;
  seconds: number;
  onStartEvent: () => void;
  reset: () => void;
};
export default function TimerCountDown(props: Props) {
  const { start, minutes, seconds, onStartEvent, reset } = props;

  const startPomodoBtnText = start ? "Pause" : "Start";

  return (
    <>
      <Text fontSize='6xl' color='#262426' as='b'>
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </Text>

      <Stack direction='row' spacing={4}>
        <Button
          size='lg'
          colorScheme='orange'
          onClick={onStartEvent}
          variant='outline'>
          {startPomodoBtnText}
        </Button>
        <Button
          size='lg'
          colorScheme='orange'
          onClick={reset}
          variant='outline'>
          Reset
        </Button>
      </Stack>
    </>
  );
}
