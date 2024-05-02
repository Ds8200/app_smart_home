import { atom } from "jotai";
import { ClicksEnum } from "../../enums/clicksEnum";

export const atomModeToggleClicks = atom<boolean[]>(new Array(Object.keys(ClicksEnum).length).fill(false));