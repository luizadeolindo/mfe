export const Saldo = () => {
    const containerStyles = {
    margin: '16px auto',
    padding: '8px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
  };

  const headingStyles = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  };

  const flexContainerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const availableBalanceStyles = {
    fontSize: '1rem',
  };

  const boldTextStyles = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'green',
  };
    return (
        <>
        <section style={containerStyles}>
      <h1 style={headingStyles}>Saldo disponível</h1>
      <div style={flexContainerStyles}>
        <p style={availableBalanceStyles}>Saldo:</p>
        <p style={boldTextStyles}>R$10,000.00</p>
      </div>
    </section>
        </>
    )
}