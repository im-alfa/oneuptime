import PageMap from "../PageMap";
import { BuildBreadcrumbLinksByTitles } from "./Helper";
import Dictionary from "Common/Types/Dictionary";
import Link from "Common/Types/Link";

export function getCodeRepositoryBreadcrumbs(
  path: string,
): Array<Link> | undefined {
  const breadcrumpLinksMap: Dictionary<Link[]> = {
    ...BuildBreadcrumbLinksByTitles(PageMap.AI_COPILOT_CODE_REPOSITORY_VIEW, [
      "Project",
      "AI Copilot",
      "View Git Repository",
    ]),
    ...BuildBreadcrumbLinksByTitles(
      PageMap.AI_COPILOT_CODE_REPOSITORY_VIEW_DELETE,
      ["Project", "AI Copilot", "View Git Repository", "Delete Repository"],
    ),
    ...BuildBreadcrumbLinksByTitles(
      PageMap.AI_COPILOT_CODE_REPOSITORY_VIEW_SETTINGS,
      ["Project", "AI Copilot", "View Git Repository", "Settings"],
    ),
    ...BuildBreadcrumbLinksByTitles(
      PageMap.AI_COPILOT_CODE_REPOSITORY_VIEW_SERVICES,
      ["Project", "AI Copilot", "View Git Repository", "Services"],
    ),
  };
  return breadcrumpLinksMap[path];
}
