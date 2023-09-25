"use client";

import style from "./svg.module.css";

import WeightLifterIcon from "../weightLifterIcon.svg";
import TimerAlmostDone from "../TimerAlmostDoneIcon.svg";
import VerifiedIcon from "../verifiedIcon.svg";
import QuoteIcon from "../QuotesIcon.svg";
import StarIcon from "../StarIcon.svg";
import FireIcon from "../FireIcon.svg";
import SleepIcon from "../SleepEmojiIcon.svg";
import ElectricIcon from "../LightningIcon.svg";
import RunningIcon from "../RunningIcon.svg";
import EyeIcon from "../EyeIcon.svg";
import DiscountIcon from "../DiscountIcon.svg";
import DiscountIconLarge from "../DiscountIconLarge.svg";
import DropDownIcon from "../DropDownIcon.svg";
import PriceDownIcon from "../PriceDownIcon.svg";
import NoContractsIcon from "../NoContractsIcon.svg";
import CycleIcon from "../CycleIcon.svg";
import UsaIcon from "../USASheildIcon.svg";
import MoleculeIcon from "../MoleculeIcon.svg";
import CartIcon from "../CartIcon.svg";
import MenuIcon from "../MenuIcon.svg";
import ArrowIcon from "../ArrowIcon.svg";
import ArrowSkinnyIcon from "../ArrowSkinnyIcon.svg";
import InfoIcon from "../InfoIcon.svg";
import XIcon from "../XIcon.svg";
import FlexIcon from "../FlexIcon.svg";
import TrashIcon from "../TrashIcon.svg";
import PlusIcon from "../PlusIcon.svg";
import MinusIcon from "../MinusIcon.svg";
import LilTriangleIcon from "../LilTriangleIcon.svg";

export type SvgNames =
  | "weightLifter"
  | "timerAlmostDone"
  | "verifiedIcon"
  | "QuoteIcon"
  | "StarIcon"
  | "FireIcon"
  | "SleepIcon"
  | "ElectricIcon"
  | "RunningIcon"
  | "EyeIcon"
  | "DiscountIcon"
  | "DiscountIconLarge"
  | "DropDownIcon"
  | "PriceDownIcon"
  | "NoContractsIcon"
  | "CycleIcon"
  | "USAIcon"
  | "MoleculeIcon"
  | "CartIcon"
  | "MenuIcon"
  | "ArrowIcon"
  | "ArrowSkinnyIcon"
  | "InfoIcon"
  | "XIcon"
  | "FlexIcon"
  | "TrashIcon"
  | "PlusIcon"
  | "MinusIcon"
  | "LilTriangleIcon";

interface SvgProps {
  icon: SvgNames;
  color?: string;
  size?: string;
  stroke?: string;
}

const Svg = ({ icon, color, size, stroke }: SvgProps) => {
  if (icon === "weightLifter") {
    return (
      <WeightLifterIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "timerAlmostDone") {
    return (
      <TimerAlmostDone
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "verifiedIcon") {
    return (
      <VerifiedIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "QuoteIcon") {
    return (
      <QuoteIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "StarIcon") {
    return (
      <StarIcon
        style={{
          fill: color ? color : "black",
          height: size ? size : "20px",
          stroke: stroke ? stroke : "black",
        }}
      />
    );
  }
  if (icon === "FireIcon") {
    return (
      <FireIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "SleepIcon") {
    return (
      <SleepIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "ElectricIcon") {
    return (
      <ElectricIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "RunningIcon") {
    return (
      <RunningIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "EyeIcon") {
    return (
      <EyeIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "DiscountIcon") {
    return (
      <DiscountIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "DiscountIconLarge") {
    return (
      <DiscountIconLarge
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "DropDownIcon") {
    return (
      <DropDownIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "PriceDownIcon") {
    return (
      <PriceDownIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "NoContractsIcon") {
    return (
      <NoContractsIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "CycleIcon") {
    return (
      <CycleIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "USAIcon") {
    return (
      <UsaIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "MoleculeIcon") {
    return (
      <MoleculeIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "CartIcon") {
    return (
      <CartIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "MenuIcon") {
    return (
      <MenuIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "ArrowIcon") {
    return (
      <ArrowIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "ArrowSkinnyIcon") {
    return (
      <ArrowSkinnyIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "InfoIcon") {
    return (
      <InfoIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "XIcon") {
    return (
      <XIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "FlexIcon") {
    return (
      <FlexIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "TrashIcon") {
    return (
      <TrashIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "PlusIcon") {
    return (
      <PlusIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "MinusIcon") {
    return (
      <MinusIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
  if (icon === "LilTriangleIcon") {
    return (
      <LilTriangleIcon
        style={{ fill: color ? color : "black", height: size ? size : "20px" }}
      />
    );
  }
};

export default Svg;
