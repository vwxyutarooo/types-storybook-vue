// Type definitions for @storybook/vue 3.0
// Project: https://github.com/storybooks/storybook
// Definitions by: vwxyutarooo Feth <https://github.com/vwxyutarooo>
// Definitions: https://github.com/vwxyutarooo/types-storybook-vue
// TypeScript Version: 2.6.2

/// <reference types="webpack-env" />

declare module "@storybook/vue" {
  import Vue, { ComponentOptions } from "vue";
  import * as React from 'react';

  export type Renderable = string | ComponentOptions<Vue> | JSX.Element;
  export type RenderFunction = () => Renderable;
  export type StoryDecorator = (story: RenderFunction, context: { kind: string, story: string }) => Renderable | null;

  export interface Story {
    readonly kind: string;
    add(storyName: string, callback: RenderFunction | String): this;
    addDecorator(decorator: StoryDecorator): this;
  }

  export function addDecorator(decorator: StoryDecorator): void;
  export function configure(fn: () => void, module: NodeModule): void;
  export function setAddon(addon: object): void;
  export function storiesOf(name: string, module: NodeModule): Story;
  export function storiesOf<T>(name: string, module: NodeModule): Story & T;

  export interface StoryObject {
    name: string;
    render: RenderFunction;
  }

  export interface StoryBucket {
    kind: string;
    stories: StoryObject[];
  }

  export function getStorybook(): StoryBucket[];
}
