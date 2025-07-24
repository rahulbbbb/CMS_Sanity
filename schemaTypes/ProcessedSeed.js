export const seedPoint = {
  name: "seedPoint",
  title: "Seed Point",
  type: "object",
  fields: [
    { name: "id", title: "ID", type: "string" },

    { name: "title_en", title: "Title (English)", type: "string" },
    { name: "title_hi", title: "Title (Hindi)", type: "string" },
    { name: "title_pa", title: "Title (Punjabi)", type: "string" },

    { name: "summary_en", title: "Summary (English)", type: "text" },
    { name: "summary_hi", title: "Summary (Hindi)", type: "text" },
    { name: "summary_pa", title: "Summary (Punjabi)", type: "text" },

    { name: "readMore_en", title: "Read More (English)", type: "text" },
    { name: "readMore_hi", title: "Read More (Hindi)", type: "text" },
    { name: "readMore_pa", title: "Read More (Punjabi)", type: "text" },

    { name: "example_en", title: "Example (English)", type: "text" },
    { name: "example_hi", title: "Example (Hindi)", type: "text" },
    { name: "example_pa", title: "Example (Punjabi)", type: "text" },

    { name: "analogy_en", title: "Analogy (English)", type: "text" },
    { name: "analogy_hi", title: "Analogy (Hindi)", type: "text" },
    { name: "analogy_pa", title: "Analogy (Punjabi)", type: "text" },

    { name: "icon", title: "Lucide Icon Name", type: "string" },
    { name: "href", title: "Link / Href", type: "url" },
  ],
};
