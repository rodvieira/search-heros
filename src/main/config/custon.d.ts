declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any
  export default content
}

declare module '*.scss' {
  const content: { [className: string]: string }
  export = content
}
