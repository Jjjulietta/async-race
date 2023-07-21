
type Callback<T> = (data?: T) => void

interface Body {
  method: string
  headers?: HeadersInit
  body?: string
}

// const url = 'http://127.0.0.1:3000'

export class Loader {
  public baseLink: string
  public body: Body

  constructor (baselinc: string, body: Body) {
    this.baseLink = baselinc
    this.body = body
  }

  public getResp<T>(callback: Callback<T>): void {
    this.load(callback)
  }

  public getRespRr (callback: Callback<number>): void {
    this.loadEr(callback)
  }

  public getRespResp (callback: Callback<Headers>): void {
    this.loadResp(callback)
  }

  // eslint-disable-next-line class-methods-use-this
  public errorHundler (res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) {
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`)
        // throw Error(res.statusText)
      }
      if (res.status === 500) {
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`)
        console.log(res.url)
        /* const urls = `${res.url.slice(0, res.url.lastIndexOf('='))}=stopped`
        const start = res.url.indexOf('=')
        const end = res.url.indexOf('&')
        const id = res.url.slice(start + 1, end)
        console.log(id)
        const idStr = `num${id}`
        const carBlock = document.querySelector(`[data-id = ${idStr}]`)
        const imgCar: HTMLElement | null | undefined = carBlock?.querySelector('.img-auto')
        const flag: HTMLElement | null | undefined = carBlock?.querySelector('.flag')
        // const currPos = imgCar?.offsetLeft
        const currPos = imgCar?.getBoundingClientRect().left
        console.log(currPos)
        const coord = flag?.getBoundingClientRect().left
        console.log(coord)
        const loader = new Loader(urls, { method: 'PATCH' })
        loader.getResp((data?: Velocity) => {
          console.log(data)
          if (data != null && imgCar instanceof HTMLElement) {
            console.log(data.velocity)
            animate(data?.velocity, data?.distance, imgCar, currPos, coord)
          }
        }) */
      }
    }
    return res
  }

  private load <JSON>(callback: Callback<JSON>): void {
    void fetch(this.baseLink, this.body)
      .then(this.errorHundler)
      .then(async (res: Response): Promise<JSON> => await res.json())
      .then((data) => { callback(data) })
      .then((err) => { console.log(err) })
  }

  // eslint-disable-next-line class-methods-use-this
  private loadEr (callback: Callback<number>): void {
    void fetch(this.baseLink, this.body)
      .then((response: Response) => { callback(response.status) })
  }

  /* private loadRase (callback: Callback<JSON>): void {
    void fetch(this.baseLink, this.body)
      .then(this.errorHundler)
      .then(async (res: Response): Promise<JSON> => await res.json())
      .then((data) => { callback(data) })
      .then((err) => { console.log(err) })
  } */

  private loadResp (callback: Callback<Headers>): void {
    void fetch(this.baseLink, this.body)
      .then((respopse: Response) => { callback(respopse.headers) })
  }
}
