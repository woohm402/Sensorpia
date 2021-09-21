const Home = () => {
  const data = require('./api/en.json')

  return (
    <>
      <div>{data.menu}</div>
    </>
  )
}
export default Home
