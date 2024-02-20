import { defineConfig, presetIcons, presetUno } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({}),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
  theme: {
    fontFamily: {
      sans: "system-ui",
      serif: "system-ui",
      mono: "monospace",
      logo: "Kaiti SC",
    },
  },
});
