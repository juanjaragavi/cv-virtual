import { Switch, Group } from "@mantine/core";
import { SunLow, Moon } from "tabler-icons-react";

function ThemeSwitcher() {
  const changeDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Group position="center">
      <Switch
        onChange={changeDarkMode}
        className="switch transiciones"
        size="xl"
        color="pink"
        onLabel={<SunLow size={28} />}
        offLabel={<Moon size={26} color="rgb(236, 72, 153)" />}
      />
    </Group>
  );
}
export default ThemeSwitcher;
