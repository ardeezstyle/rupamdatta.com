export {} // ensures this file is treated as a module

type GtagCommand = 'config' | 'event' | 'js'

declare global {
  interface Window {
    gtag?: (
      command: GtagCommand,
      targetIdOrEventName: string | Date,
      config?: Record<string, unknown>,
    ) => void
  }
}
