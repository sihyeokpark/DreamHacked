import { Client, Collection } from 'discord.js'

export default class MyClient extends Client {
  collection: Collection<any, any> // use correct type :)
  constructor(options: any) {
    super(options)
    this.collection = new Collection()
  }
}