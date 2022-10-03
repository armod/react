import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <section className='section'>
      <h1>404</h1>
      <h2>Error - page not found</h2>
      <Link to='/' className='btn'>
        back home
      </Link>
    </section>
  )
}
export default Error
