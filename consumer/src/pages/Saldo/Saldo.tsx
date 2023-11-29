import { useStore } from '../..';
import { availableBalanceStyles, boldTextStyles, containerStyles, flexContainerStyles, headingStyles } from '../../styles/styles';


const Saldo = () => {
  const {count} = useStore()
  
    return (
        <>
        <section style={containerStyles}>
      <h1 style={headingStyles}>Saldo disponível</h1>
      <div style={flexContainerStyles}>
        <p style={availableBalanceStyles}>Saldo:</p>
            <p style={boldTextStyles}>R${count}</p>
      </div>
    </section>
        </>
    )
};
export default Saldo