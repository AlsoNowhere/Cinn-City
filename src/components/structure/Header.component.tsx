import { useCallback, useContext, useEffect, useState } from "react";

import { Portal, Select, createListCollection, type SelectValueChangeDetails } from "@chakra-ui/react";

import { AppContext } from "../../contexts/app.context";

import { modeMap } from "../../data/modes.data";

import "./Header.scss";

const demos = createListCollection({
  items: Array.from(modeMap).map(([key, [label]]) => ({ label, value: key })),
});

export const Header = () => {
  const [value, setValue] = useState<string[]>([""]);

  const { cinnamon } = useContext(AppContext);

  const changeMode = useCallback((details: SelectValueChangeDetails) => {
    const {
      value: [mode],
    } = details;

    setValue([mode]);
  }, []);

  useEffect(() => {
    const [mode] = value;
    const newMode = modeMap.get(mode);
    if (newMode === undefined) return;

    const [, run] = newMode;

    if (cinnamon !== undefined) {
      run(cinnamon);
    }
  }, [value, cinnamon]);

  return (
    <header className="header">
      <h1>Cinn City</h1>

      <div className="select">
        <Select.Root collection={demos} size="sm" width="320px" value={value} onValueChange={changeMode}>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select demo" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {demos.items.map((demo) => (
                  <Select.Item item={demo} key={demo.value}>
                    {demo.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
      </div>
    </header>
  );
};
