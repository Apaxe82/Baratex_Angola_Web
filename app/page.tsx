"use client"; // Força renderização no cliente para teste

export default function Home() {
  return (
    <div style={{ background: 'white', color: 'black', padding: '100px', textAlign: 'center', zIndex: 9999 }}>
      <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>BARATEX ANGOLA ESTÁ ONLINE</h1>
      <p>Se vês esta mensagem, o Next.js está a funcionar. O problema está nos componentes.</p>
      <button 
        onClick={() => window.location.href='#contacto'}
        style={{ background: '#2D5A27', color: 'white', padding: '10px 20px', marginTop: '20px', borderRadius: '8px' }}
      >
        Teste de Botão
      </button>
    </div>
  );
}

