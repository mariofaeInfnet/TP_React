export default function Menu() {
  return (
    <div style={menuStyle}>
      <a href="#">Home</a>
      <a href="#">Menu</a>
    </div>
  )
}

const menuStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
  backgroundColor: '#f0f0f0',
  borderBottom: '1px solid #ccc',
};