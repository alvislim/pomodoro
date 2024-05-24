import { Flex, Text, useMultiStyleConfig, Button } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";

export default function PomoTimer() {
  const styles = useMultiStyleConfig("PomoTimerStyle", {});
  const [start, setStart] = useState<boolean>(false);
  const [minutes, setMinutes] = useState<number>(25);
  const [seconds, setSeconds] = useState<number>(0);

  const onStartPomodo = () => {
    setStart(!start);
  };

  const pomodoRef = useRef(null);

  const onStartTimer = () => {
    if (minutes === 0 && seconds === 0) {
      //   reset functions or move to break
      console.log("done");
    } else if (seconds === 0) {
      setMinutes((minutes) => minutes - 1);
      setSeconds(59);
    } else {
      setSeconds((second) => second - 1);
    }
  };

  useEffect(() => {
    window.onbeforeunload = () => {
      return start ? "are u sure u want to exit" : "";
    };

    const timer = setInterval(() => {
      if (start) {
        onStartTimer();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [start, seconds, minutes]);

  const startPomodoBtnText = start ? "Pause" : "Start";

  return (
    <Flex __css={styles.flexContainer}>
      <Text fontSize='3xl' color='#262426' as='b'>
        {minutes} : {seconds.toString().padStart(2, "0")}
      </Text>
      <Button size='lg' colorScheme='orange' onClick={onStartPomodo}>
        {startPomodoBtnText}
      </Button>
    </Flex>
  );
}
