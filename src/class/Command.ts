export default class Command {
  constructor(public command: string, public play: () => void) {

  }
}