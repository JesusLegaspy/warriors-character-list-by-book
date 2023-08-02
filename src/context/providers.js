import { MyBookProvider } from './books';
import { MyCharacterProvider } from './characters';

const MyProviders = ({ children }) => {

  return (
    <MyBookProvider>
      <MyCharacterProvider>
        {children}
      </MyCharacterProvider>
    </MyBookProvider>
  );
}

export default MyProviders;