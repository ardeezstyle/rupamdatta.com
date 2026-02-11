export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #eee',
        padding: '40px',
        textAlign: 'center',
        marginTop: '80px',
      }}
    >
      <p>© {new Date().getFullYear()} Rupam Datta</p>
      <p>
        Experiments & UI demos →{' '}
        <a
          href="https://mydemos.co.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          mydemos.co.in
        </a>
      </p>
    </footer>
  )
}
