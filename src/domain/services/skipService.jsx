import { skipHireJsonData } from "../../data/skipHirejsonData";
import { SkipModel } from "../models/SkipModel";
export const fetchSkips = () => {
  return skipHireJsonData.map(item => new SkipModel(item));
};
