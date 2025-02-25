import { Tabs } from "./ui/tabs";

const tabs = [
  { title: "EN", value: "en" },
  { title: "ID", value: "id" }
];

export const LanguageToggle = () => {
  return (
    <Tabs tabs={tabs}>
    </Tabs>
  );
};