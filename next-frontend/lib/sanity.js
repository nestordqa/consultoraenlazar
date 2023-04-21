import { definePreview } from "next-sanity/preview";
import createImageUrlBuilder from "@sanity/image-url";
import { config } from "./config";
import { suspend } from "suspend-react";
import { _checkAuth } from "@sanity/preview-kit";

export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const usePreviewSubscription = definePreview(config);

const projectId = config.projectId;
const token = config.token;
export const useCheckAuth = () =>
  suspend(
    () => _checkAuth(projectId, token),
    ["@sanity/preview-kit", "checkAuth", projectId, token]
  );
