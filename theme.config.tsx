import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>JYT Protocol</span>,
  project: {
    link: "https://github.com/Jaal-Yantra-Textiles/protocol",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/Jaal-Yantra-Textiles/protocol",
  footer: {
    text: "Thanks to Nextra Docs Template , we have forked this. All hats off to Open Source",
  },
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "hi-IN", text: "हिन्दी" },
  ],
};

export default config;
