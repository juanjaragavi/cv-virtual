import { MantineProvider, Switch, Group } from "@mantine/core";
import { SunLow, Moon } from "tabler-icons-react";

function ThemeSwitcher(props) {
  const { className } = props;
  const changeDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <MantineProvider
      theme={{
        colors: {
          "bright-pink": [
            "#F0BBDD",
            "#ED9BCF",
            "#EC7CC3",
            "#ED5DB8",
            "#F13EAF",
            "#F71FA7",
            "#FF00A1",
            "#E00890",
            "#C50E82",
            "#AD1374",
          ],
        },
      }}
    >
      <Group position="center">
        <Switch
          onChange={changeDarkMode}
          className={className}
          styles={() => ({
            root: {
              border: 0,
            },
          })}
          size="xl"
          color="bright-pink"
          onLabel={<SunLow size={28} />}
          offLabel={<Moon size={26} color="rgb(236, 72, 153)" />}
        />
      </Group>
    </MantineProvider>
  );
}
export default ThemeSwitcher;