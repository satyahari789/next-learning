export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: '2px solid blue', padding: '1rem' }}>
      <h2>Custom Layout for Layouts and Pages</h2>
      {children}
    </div>
  );
}
