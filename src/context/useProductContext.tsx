import ProductContext from './ProductContext';
import { useContext } from 'react';

const useProductContext = () => {
	const context = useContext(ProductContext);
	if (context === undefined) {
		throw new Error('useProductContext within ProductContext.Provider');
	}

	return context;
};
export default useProductContext;
