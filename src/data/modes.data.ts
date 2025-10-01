import type { Cinnamon } from "cinnamon";

import { mode01 } from "../logic/mode01.logic";
import { mode02 } from "../logic/mode02.logic";
import { mode03 } from "../logic/mode03.logic";
import { mode04 } from "../logic/mode04.logic";
import { mode05 } from "../logic/mode05.logic";
import { mode06 } from "../logic/mode06.logic";
import { mode07 } from "../logic/mode07.logic";

export const modeMap = new Map<string, [string, (cinnamon: Cinnamon) => void]>([
  ["mode01", ["Mode 01", mode01]],
  ["mode02", ["Mode 02", mode02]],
  ["mode03", ["Mode 03", mode03]],
  ["mode04", ["Mode 04", mode04]],
  ["mode05", ["Mode 05", mode05]],
  ["mode06", ["Mode 06", mode06]],
  ["mode07", ["Mode 07", mode07]],
]);
