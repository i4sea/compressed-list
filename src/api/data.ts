import { ItemProps } from '../store/useItem'

const sleep = () => {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(true)
    }, 2000)
  })
}

export const getItems = async () => {
  const res = await fetch('http://localhost:3000/items')

  await sleep()

  return res.json()
}

export const createItem = async (item: ItemProps) => {
  await fetch('http://localhost:3000/items', {
    method: 'POST',
    body: JSON.stringify(item)
  })
}
