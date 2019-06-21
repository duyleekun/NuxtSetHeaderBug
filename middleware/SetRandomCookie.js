export default function ({app, redirect, store, req, res}) {
  console.log('DMDMDM')
  if (res) {
    res.setHeader('Set-Cookie', ['a=1', 'b=2'])
  }
}
