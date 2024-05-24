import {
  //   Flex,
  //   useMultiStyleConfig,
  //   Button,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { tabs } from "@/constant";
import TimerCountDown from "./timer-count-down";

export default function PomoTimer() {
  //   const styles = useMultiStyleConfig("PomoTimerStyle", {});
  const [start, setStart] = useState<boolean>(false);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(tabs[tabIndex].defaultTime);
  const [seconds, setSeconds] = useState<number>(0);
  const [pomoCompleted, setPomoCompleted] = useState<number>(0);
  const [breaksCompleted, setBreaksCompleted] = useState<number>(0);

  const colors = useColorModeValue(
    ["red.50", "teal.50"],
    ["red.900", "teal.900"]
  );

  const bg = colors[tabIndex];

  const onStartEvent = () => {
    setStart(!start);
  };

  const reset = () => {
    setStart(false);
    setMinutes(tabs[tabIndex].defaultTime);
    setSeconds(0);
  };

  const onTabClick = () => {
    reset();
  };

  const onStartTimer = () => {
    if (minutes === 0 && seconds === 0) {
      reset();
    } else if (seconds === 0) {
      setSeconds(2);
      setMinutes((minutes) => minutes - 1);
    } else {
      setSeconds((second) => second - 1);
    }
  };

  useEffect(() => {
    window.onbeforeunload = () => {
      return start ? "" : null;
    };

    if (start && minutes === 0 && seconds === 0) {
      if (tabIndex === 0) {
        setTabIndex(1);
        setMinutes(tabs[1].defaultTime);
        setPomoCompleted((pomoCompleted) => pomoCompleted + 1);
      } else {
        setMinutes(tabs[1].defaultTime);
        setBreaksCompleted((breaksCompleted) => breaksCompleted + 1);
        setStart(false);
      }
    }

    const timer = setInterval(() => {
      if (start) {
        onStartTimer();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [start, minutes, seconds, tabIndex, pomoCompleted, breaksCompleted]);

  return (
    <Tabs
      index={tabIndex}
      isFitted
      isLazy
      onChange={(index) => setTabIndex(index)}
      bg={bg}
      borderRadius='6px'
      p='2rem 1rem'
      boxShadow='rgba(0, 0, 0, 0.1) 0px 10px 50px'
      aria-selected>
      <TabList w='100%'>
        {tabs.map((item, index) => {
          return (
            <Tab
              fontSize='2xl'
              color='#262426'
              key={index}
              onClick={onTabClick}>
              {item.title}
            </Tab>
          );
        })}
      </TabList>
      {/* <Flex __css={styles.flexContainer}> */}
      <TabPanels>
        {tabs.map((_, index) => {
          return (
            <TabPanel
              key={index}
              display='flex'
              flexDir='column'
              alignItems='center'
              gap='1rem'
              minW='300px'>
              <TimerCountDown
                start={start}
                minutes={minutes}
                seconds={seconds}
                onStartEvent={onStartEvent}
                reset={reset}
              />
              <Text as='i'>{`Pomodoro completed - ${pomoCompleted}`}</Text>
              <Text as='i'>{`Breaks completed - ${breaksCompleted}`}</Text>
            </TabPanel>
          );
        })}
      </TabPanels>
      {/* </Flex> */}
    </Tabs>
  );
}
