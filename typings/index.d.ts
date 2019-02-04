import i18next from "i18next";
import Vue, { PluginFunction } from "vue";

declare class VueI18Next {
  constructor(i18next: i18next.i18n, options?: VueI18NextOptions);
  i18next: i18next.i18n;
  t: i18next.TranslationFunction;
  resetVm: ({  }: { i18nLoadedAt: Date }) => void;
  i18nLoadedAt: string;
  onI18nChanged: () => void;

  static install: PluginFunction<never>;
  static version: string;
}

export interface VueI18NextOptions extends i18next.TranslationOptions {
  bindI18n?: string;
  bindStore?: string;
}

export interface VueI18NextComponentOptions {
  ns?: string | Array<string>;
  lng?: string;
  keyPrefix?: string;
  messages?: { [x: string]: {} };
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    i18n?: VueI18Next;
    i18nOptions?: VueI18NextComponentOptions;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    readonly $i18n: VueI18Next;
    $t: i18next.TranslationFunction;
  }
}

export default VueI18Next;
