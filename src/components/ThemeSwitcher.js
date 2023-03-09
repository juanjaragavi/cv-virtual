import { Switch, Group } from "@mantine/core";
import { FaMoon, FaSun } from "react-icons/fa";
import { IconContext } from "react-icons";

function ThemeSwitcher() {
  return (
    <Group position="center">
      <Switch
        className="switch transiciones"
        size="xl"
        color="pink"
        onLabel={
          <IconContext.Provider
            value={{ color: "white", className: "text-xl" }}
          >
            <FaSun />
          </IconContext.Provider>
        }
        offLabel={
          <IconContext.Provider
            value={{ color: "#D35580", className: "text-xl" }}
          >
            <FaMoon />
          </IconContext.Provider>
        }
      />
    </Group>
  );
}
export default ThemeSwitcher;
