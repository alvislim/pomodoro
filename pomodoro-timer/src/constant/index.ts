type Title = "Pomodoro" | "Break";

export type Tab = {
  title: Title;
  defaultTime: number;
};

export const tabs: Tab[] = [
  {
    title: "Pomodoro",
    defaultTime: 1,
  },
  {
    title: "Break",
    defaultTime: 1,
  },
];
