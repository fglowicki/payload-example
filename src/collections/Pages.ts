import { Block, CollectionConfig } from "payload/types";

const TitleWidget: Block = {
  slug: "TitleWidget",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
  ],
};

const DescriptionWidget: Block = {
  slug: "DescriptionWidget",
  fields: [
    {
      name: "description",
      type: "textarea",
    },
  ],
};

export const Pages: CollectionConfig = {
  slug: "pages",
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "uniqueField",
      type: "text",
      unique: true,
    },
    {
      name: "Widgets",
      type: "blocks",
      minRows: 1,
      maxRows: 20,
      blocks: [TitleWidget, DescriptionWidget],
    },
  ],
};
