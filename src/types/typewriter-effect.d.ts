declare module 'typewriter-effect/dist/core' {
    class Typewriter {
      constructor(element: string | Element, options?: any);
      typeString(text: string): Typewriter;
      pauseFor(ms: number): Typewriter;
      deleteAll(): Typewriter;
      start(): Typewriter;
    }
    export default Typewriter;
  }
  