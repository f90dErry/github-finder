const Footer = () => {
  const footerYear = Date().getFullYear()
  return (
    <footer className='footer p-10 bg-gray-700 footer-center'>
      <div>
        <p>Copyright &copy; {footerYear} All Right Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
