export type Obj = Record<string, FormDataEntryValue>
export interface Params {
  tag: string
  className: string
  text?: string
  /* attributeName?: string
  attributeValue?: string */
}

export type element = HTMLElement | HTMLButtonElement | HTMLInputElement | HTMLFormElement

export interface Input {
  inputName: string
  attributeName: string
  attributeValue: string
  inputText: string
}

export interface Attribute {
  value: string
  valueName: string
}

export interface ParamsImg extends Params {
  // data: string
  color: string
}

export interface Garage {
  name: string
  color: string
  id: number
}

export interface Winners {
  id: number
  wins: number
  time: number
}

export interface Data extends Garage {
  garage: Garage[]
}

export interface Velocity {
  velocity: number
  distance: number
  success: boolean
}

export interface Rase extends Velocity {
  velocities: Velocity[]
}

export enum Path {
  garage = '/garage',
  engine = '/engine',
  winners = '/winners'
}

export enum Errors {
}

export interface Table extends Params {
  tagTR: string
  tagTD: string
  tagTH: string
  numCol: number
}

export type Row = Pick< Table, 'tagTR' | 'tagTD' | 'numCol' >

export type Cars = Pick< Garage, 'name' | 'color'>
