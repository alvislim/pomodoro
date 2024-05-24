type Title = "Pomodoro" | "Break";

export type Tab = {
  title: Title;
  defaultTime: number;
};

export const tabs: Tab[] = [
  {
    title: "Pomodoro",
    defaultTime: 25,
  },
  {
    title: "Break",
    defaultTime: 5,
  },
];
