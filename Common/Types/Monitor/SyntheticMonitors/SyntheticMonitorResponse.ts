import { JSONObject } from "../../JSON";
import PositiveNumber from "../../PositiveNumber";
import Screenshot from "./Screenshot";

export default interface SyntheticMonitorResponse {
    result: string | number | boolean | JSONObject | undefined;
    scriptError?: string | undefined;
    screenshots?: Array<Screenshot> | undefined; // base 64 encoded screenshots
    logMessages: string[];
    executionTimeInMS: PositiveNumber;
}