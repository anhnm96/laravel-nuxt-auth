import { presetWind , defineConfig, transformerVariantGroup, transformerDirectives   } from 'unocss'
import { presetForms } from '@julr/unocss-preset-forms'

export default defineConfig({
  presets: [
    presetWind(),
    presetForms()
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives()
  ],
})
