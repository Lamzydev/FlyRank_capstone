const settingsSections = [
  {
    title: 'Account',
    description: 'Manage your profile details and sign-in preference.',
    items: ['Email', 'Password', 'Two-factor authentication']
  },
  {
    title: 'Notifications',
    description: 'Choose what updates you want to receive.',
    items: ['Email alerts', 'Push notifications', 'AI support']
  },
  {
    title: 'Privacy',
    description: 'Control how your information is shared.',
    items: ['Profile visibility', 'Data sharing', 'Verify Identity']
  }
]

function Settings() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <p style={styles.eyebrow}>Preferences</p>
          <h1 style={styles.title}>Settings</h1>
          <p style={styles.subtitle}>Customize your experience and keep your account secure.</p>
        </div>

        <div style={styles.grid}>
          {settingsSections.map((section) => (
            <section key={section.title} style={styles.section}>
              <h2 style={styles.sectionTitle}>{section.title}</h2>
              <p style={styles.sectionDescription}>{section.description}</p>
              <ul style={styles.list}>
                {section.items.map((item) => (
                  <li key={item} style={styles.listItem}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div style={styles.footer}>
          <button type="button" style={styles.button}>Save Changes</button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    background: 'linear-gradient(135deg, #eef2ff, #f8fafc)',
    fontFamily: 'Arial, sans-serif'
  },
  card: {
    width: '100%',
    maxWidth: '950px',
    background: '#ffffff',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 18px 40px rgba(15, 23, 42, 0.12)',
    border: '1px solid #e2e8f0'
  },
  header: {
    marginBottom: '28px'
  },
  eyebrow: {
    margin: '0 0 8px',
    color: '#4f46e5',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.25em',
    fontSize: '12px'
  },
  title: {
    margin: '0 0 8px',
    fontSize: '34px',
    color: '#111827',
    fontWeight: 700
  },
  subtitle: {
    margin: 0,
    color: '#64748b',
    fontSize: '16px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '18px'
  },
  section: {
    border: '1px solid #e2e8f0',
    borderRadius: '14px',
    padding: '18px',
    background: 'linear-gradient(145deg, #f8fafc, #f1f5f9)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  },
  sectionTitle: {
    margin: '0 0 8px',
    fontSize: '20px',
    color: '#0f172a',
    fontWeight: 600
  },
  sectionDescription: {
    margin: '0 0 12px',
    color: '#64748b',
    fontSize: '14px',
    lineHeight: 1.5
  },
  list: {
    margin: 0,
    paddingLeft: '18px',
    color: '#334155'
  },
  listItem: {
    marginBottom: '8px',
    fontSize: '14px'
  },
  footer: {
    marginTop: '28px',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    border: 'none',
    background: 'linear-gradient(90deg, #4f46e5, #2563eb)',
    color: '#fff',
    padding: '12px 18px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 600,
    boxShadow: '0 8px 16px rgba(79, 70, 229, 0.2)'
  }
}

export default Settings
